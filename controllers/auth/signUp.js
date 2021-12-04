const { User } = require('../../models');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
};

module.exports = signUp;
