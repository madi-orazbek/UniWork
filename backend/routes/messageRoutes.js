const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, sendMessage);
router.get('/:projectId', protect, getMessages);

module.exports = router;
