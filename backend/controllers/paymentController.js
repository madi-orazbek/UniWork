const Payment = require('../models/Payment');

const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPaymentsForProject = async (req, res) => {
  const payments = await Payment.find({ project: req.params.projectId });
  res.json(payments);
};

module.exports = { createPayment, getPaymentsForProject };
