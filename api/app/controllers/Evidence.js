const Evidence = require('../models/Evidence');
const db = require('../middleware/db');
const { handleError, isIDValid } = require('../middleware/utils');

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
            { $match: { __type: 'Book' } },
            { $count: 'totalBooks' }
          ],
          totalWebsites: [
            { $match: { __type: 'Website' } },
            { $count: 'totalWebsites' }
          ],
          totalBookSections: [
            { $match: { __type: 'BookSection' } },
            { $count: 'totalBookSections' }
          ],
          totalJournals: [
            { $match: { __type: 'Journal' } },
            { $count: 'totalJournals' }
          ],
          totalPeriodicals: [
            { $match: { __type: 'Periodical' } },
            { $count: 'totalPeriodicals' }
          ],
          totalProceedings: [
            { $match: { __type: 'Periodical' } },
            { $count: 'totalProceedings' }
          ]
        }
      },
      {
        $project: {
          totalEvidence: { $arrayElemAt: ['$totalEvidence.totalEvidence', 0] },
          totalRejected: {
            $arrayElemAt: ['$totalRejected.totalRejected', 0]
          },
          totalPendingApproval: {
            $arrayElemAt: ['$totalPendingApproval.totalPendingApproval', 0]
          },
          totalPendingAnalysis: {
            $arrayElemAt: ['$totalPendingAnalysis.totalPendingAnalysis', 0]
          },
          totalAvailable: {
            $arrayElemAt: ['$totalAvailable.totalAvailable', 0]
          },
          totalUnavailable: {
            $arrayElemAt: ['$totalUnavailable.totalUnavailable', 0]
          },
          categories: {
            books: {
              $arrayElemAt: ['$totalBooks.totalBooks', 0]
            },
            websites: {
              $arrayElemAt: ['$totalWebsites.totalWebsites', 0]
            },
            booksections: {
              $arrayElemAt: ['$totalBookSections.totalBookSections', 0]
            },
            journals: {
              $arrayElemAt: ['$totalJournals.totalJournals', 0]
            },
            periodicals: {
              $arrayElemAt: ['$totalPeriodicals.totalPeriodicals', 0]
            },
            proceedings: {
              $arrayElemAt: ['$totalProceedings.totalProceedings', 0]
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
