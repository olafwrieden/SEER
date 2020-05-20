const express = require('express');
const router = express.Router();
const { getEvidence, getEvidenceById } = require('../controllers/Evidence');

/* Get all evidence */
router.get('/', getEvidence);

/* Get specific evidence */
router.get('/:id', getEvidenceById);

module.exports = router;
