const { handleError } = require('../middleware/utils');
const { getUserStats } = require('../controllers/User');
const { getEvidenceStats } = require('../controllers/Evidence');

exports.getStats = async (_, res) => {
  try {
    const userStats = await getUserStats();
    const evidenceStats = await getEvidenceStats();

    res.status(200).json({ users: userStats, evidence: evidenceStats });
  } catch (error) {
    handleError(res, error);
  }
};
