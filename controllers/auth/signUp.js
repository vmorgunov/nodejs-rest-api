const { User } = require('../../models');
const { Conflict } = require('http-errors');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const newUser = await User.create({ email, password });
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

module.exports = signUp;
