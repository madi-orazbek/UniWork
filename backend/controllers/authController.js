const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ token: generateToken(user), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ token: generateToken(user), user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
