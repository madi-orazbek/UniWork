const express = require('express');
const { createApplication, getApplications } = require('../controllers/applicationController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:projectId', protect, authorize('student'), createApplication);
router.get('/:projectId', protect, getApplications);

module.exports = router;
