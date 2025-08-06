const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cover_letter: String,
  price: Number,
  status: { type: String, enum: ['sent', 'accepted', 'rejected'], default: 'sent' },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
