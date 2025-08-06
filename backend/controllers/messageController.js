const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  try {
    const message = await Message.create({
      ...req.body,
      sender: req.user._id,
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMessages = async (req, res) => {
  const messages = await Message.find({ project: req.params.projectId })
    .sort('createdAt')
    .populate('sender', 'name')
    .populate('receiver', 'name');
  res.json(messages);
};

module.exports = { sendMessage, getMessages };
