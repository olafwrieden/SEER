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
