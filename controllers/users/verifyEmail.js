const { User } = require('../../models');
const { NotFound } = require('http-errors');

const verifyEmail = async (req, res) => {
  const { verifyToken } = req.params;
  const user = await User.findOne({ verifyToken });
  if (!user) {
    throw new NotFound();
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifyToken: null,
  });

  res.json({
    message: 'Verify successful',
  });
};

module.exports = verifyEmail;
