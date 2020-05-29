const express = require('express');
const router = express.Router();
const {
  getEvidence,
  getEvidenceById,
  createEvidenceReview
} = require('../controllers/Evidence');
const { isAuthed } = require('../middleware/utils');

/* Get all evidence */
router.get('/', getEvidence);

/* Get specific evidence */
router.get('/:id', getEvidenceById);

/* Create evidence review */
router.post('/:id/reviews', isAuthed(), createEvidenceReview);

module.exports = router;
