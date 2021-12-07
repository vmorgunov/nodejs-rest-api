const { NotFound } = require('http-errors');
const { User } = require('../../models');

const updateUserSubscription = async (req, res) => {
  const { userId } = req.params;
  const { subscription } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { subscription },
    {
      new: true,
    }
  );
  if (!user) {
    throw new NotFound(`User with id ${userId} not found`);
  }

  res.status(200).json({
    status: 'success',
    message: 'User subscription updated',
    data: {
      user,
    },
  });
};

module.exports = updateUserSubscription;
