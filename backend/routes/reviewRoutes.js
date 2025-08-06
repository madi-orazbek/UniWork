const express = require('express');
const { createReview, getReviewsForUser } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createReview);
router.get('/:userId', getReviewsForUser);

module.exports = router;
