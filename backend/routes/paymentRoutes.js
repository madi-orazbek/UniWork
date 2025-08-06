const express = require('express');
const { createPayment, getPaymentsForProject } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createPayment);
router.get('/:projectId', protect, getPaymentsForProject);

module.exports = router;
