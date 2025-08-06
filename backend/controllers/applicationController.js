const Application = require('../models/Application');

const createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      ...req.body,
      student: req.user._id,
      project: req.params.projectId,
    });
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getApplications = async (req, res) => {
  const apps = await Application.find({ project: req.params.projectId }).populate('student', 'name');
  res.json(apps);
};

module.exports = { createApplication, getApplications };
