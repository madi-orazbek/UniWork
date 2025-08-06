const express = require('express');
const { getProjects, getProject, createProject } = require('../controllers/projectController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', protect, authorize('client', 'admin'), createProject);

module.exports = router;
