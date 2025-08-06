const Review = require('../models/Review');

const createReview = async (req, res) => {
  try {
    const review = await Review.create({
      from: req.user._id,
      ...req.body,
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getReviewsForUser = async (req, res) => {
  const reviews = await Review.find({ to: req.params.userId }).populate('from', 'name');
  res.json(reviews);
};

module.exports = { createReview, getReviewsForUser };
