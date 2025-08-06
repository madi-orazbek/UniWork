const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/me', protect, getProfile);
router.put('/me', protect, updateProfile);

module.exports = router;
