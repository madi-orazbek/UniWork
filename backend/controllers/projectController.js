const Project = require('../models/Project');

const getProjects = async (req, res) => {
  const projects = await Project.find().populate('client', 'name');
  res.json(projects);
};

const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('client', 'name');
    if (!project) return res.status(404).json({ message: 'Не найдено' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, client: req.user._id });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProjects, getProject, createProject };
