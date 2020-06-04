const Evidence = require('../models/Evidence');
const db = require('../middleware/db');
const {
  handleError,
  isIDValid,
  buildErrorObject
} = require('../middleware/utils');

const ModerationOptions = {
  ACCEPT: 'accept',
  REJECT: 'reject'
};

const RejectionReasons = {
  UNRELATED: 'unrelated',
  POOR_QUALITY: 'poor_quality',
  DUPLICATE: 'duplicate',
  OTHER: 'other'
};

exports.getEvidence = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query);
    res.status(200).json(await db.getEntries(req, Evidence, query));
  } catch (error) {
    console.error(error);
    handleError(res, error);
  }
};

exports.getEvidenceById = async (req, res) => {
  try {
    const id = await isIDValid(req.params.id);
    res.status(200).json(await db.getEntry(id, Evidence));
  } catch (error) {
    handleError(res, error);
  }
};

exports.createNewEvidence = async (req, res) => {
  try {
    // const author = req.user.id || null;
    // if (!author) {
    //   return handleError(res, 'You must be logged in to submit new evidence.');
    // }
    res.send(await db.createEntry(req, Evidence));
  } catch (error) {
    handleError(res, error);
  }
};

exports.createEvidenceReview = async (req, res) => {
  try {
    const id = await isIDValid(req.params.id);
    const author = req.user.id || null;
    if (!author) {
      return handleError(res, 'You must be logged in to leave a review.');
    }
    res.send(await db.createEvidenceReview(id, author, req));
  } catch (error) {
    handleError(res, error);
  }
};

exports.moderateSubmission = async (req, res) => {
  try {
    const id = await isIDValid(req.params.id);
    const action = req.query.action || null;
    const { reason, comment } = req.body;

    // Is action query param supplied?
    if (!action || !Object.values(ModerationOptions).includes(action)) {
      return res
        .status(422)
        .send(buildErrorObject(422, 'Invalid moderation action.'));
    }

    // If rejecting, was a reason supplied?
    if (
      action === ModerationOptions.REJECT &&
      !Object.values(RejectionReasons).includes(reason)
    ) {
      return res
        .status(422)
        .send(buildErrorObject(422, 'No rejection reason supplied.'));
    } else if (reason === RejectionReasons.OTHER) {
      // If reason is 'other', is comment supplied?
      if (!comment) {
        return res
          .status(422)
          .send(buildErrorObject(422, 'No comment was supplied.'));
      }
    }

    // Is evidence able to be moderated?
    const entry = await db.getEntry(id, Evidence);
    if (entry.status.state !== 'PENDING_APPROVAL') {
      return res
        .status(422)
        .send(buildErrorObject(422, 'This record cannot be edited.'));
    }

    // Moderate evidence
    if (action === ModerationOptions.ACCEPT) {
      return res.send(
        await db.updateEntry(id, Evidence, {
          $set: { 'status.state': 'PENDING_ANALYSIS' } // Next status in pipe
        })
      );
    } else {
      return res.send(
        await db.updateEntry(id, Evidence, {
          $set: {
            'status.state': 'REJECTED', // Rejected status
            'status.rejection_reason': Object.keys(RejectionReasons).find(
              (k) => RejectionReasons[k] === reason
            ),
            // Attached comment if supplied
            ...(comment && { 'status.rejection_comment': comment || null })
          }
        })
      );
    }
  } catch (error) {
    handleError(res, error);
  }
};

exports.getEvidenceStats = async () => {
  try {
    const stats = await Evidence.aggregate([
      {
        $facet: {
          totalEvidence: [
            { $match: { _id: { $exists: true } } },
            { $count: 'totalEvidence' }
          ],
          totalRejected: [
            { $match: { status: { state: 'REJECTED' } } },
            { $count: 'totalRejected' }
          ],
          totalPendingApproval: [
            { $match: { status: { state: 'PENDING_APPROVAL' } } },
            { $count: 'totalPendingApproval' }
          ],
          totalPendingAnalysis: [
            { $match: { status: { state: 'PENDING_ANALYSIS' } } },
            { $count: 'totalPendingAnalysis' }
          ],
          totalAvailable: [
            { $match: { status: { state: 'AVAILABLE' } } },
            { $count: 'totalAvailable' }
          ],
          totalUnavailable: [
            { $match: { status: { state: 'UNAVAILABLE' } } },
            { $count: 'totalUnavailable' }
          ],
          totalBooks: [
            {
              $match: { __type: 'BOOK', status: { state: 'AVAILABLE' } }
            },
            { $count: 'totalBooks' }
          ],
          totalWebsites: [
            {
              $match: {
                __type: 'WEBSITE',
                status: { state: 'AVAILABLE' }
              }
            },
            { $count: 'totalWebsites' }
          ],
          totalBookSections: [
            {
              $match: {
                __type: 'BOOKSECTION',
                status: { state: 'AVAILABLE' }
              }
            },
            { $count: 'totalBookSections' }
          ],
          totalJournals: [
            {
              $match: {
                __type: 'JOURNAL',
                status: { state: 'AVAILABLE' }
              }
            },
            { $count: 'totalJournals' }
          ],
          totalPeriodicals: [
            {
              $match: {
                __type: 'PERIODICAL',
                status: { state: 'AVAILABLE' }
              }
            },
            { $count: 'totalPeriodicals' }
          ],
          totalProceedings: [
            {
              $match: { __type: 'PROCEEDINGS', status: { state: 'AVAILABLE' } }
            },
            { $count: 'totalProceedings' }
          ]
        }
      },
      {
        $project: {
          total: {
            $ifNull: [{ $arrayElemAt: ['$totalEvidence.totalEvidence', 0] }, 0]
          },
          rejected: {
            $ifNull: [{ $arrayElemAt: ['$totalRejected.totalRejected', 0] }, 0]
          },
          pendingApproval: {
            $ifNull: [
              {
                $arrayElemAt: ['$totalPendingApproval.totalPendingApproval', 0]
              },
              0
            ]
          },
          pendingAnalysis: {
            $ifNull: [
              {
                $arrayElemAt: ['$totalPendingAnalysis.totalPendingAnalysis', 0]
              },
              0
            ]
          },
          available: {
            $ifNull: [
              {
                $arrayElemAt: ['$totalAvailable.totalAvailable', 0]
              },
              0
            ]
          },
          unavailable: {
            $ifNull: [
              {
                $arrayElemAt: ['$totalUnavailable.totalUnavailable', 0]
              },
              0
            ]
          },
          availableByCategory: {
            book: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalBooks.totalBooks', 0]
                },
                0
              ]
            },
            website: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalWebsites.totalWebsites', 0]
                },
                0
              ]
            },
            bookSection: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalBookSections.totalBookSections', 0]
                },
                0
              ]
            },
            journal: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalJournals.totalJournals', 0]
                },
                0
              ]
            },
            periodical: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalPeriodicals.totalPeriodicals', 0]
                },
                0
              ]
            },
            proceeding: {
              $ifNull: [
                {
                  $arrayElemAt: ['$totalProceedings.totalProceedings', 0]
                },
                0
              ]
            }
          }
        }
      }
    ]);

    return stats[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};
