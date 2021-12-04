const { User } = require('../../models');
const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const newUser = new User({ email });

  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: 'success',
    message: 'User created',
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = signup;
