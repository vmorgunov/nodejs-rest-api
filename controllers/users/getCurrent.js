const { Users } = require('../../models');
const getCurrent = async (req, res) => {
  const { _id, email, subscription, avatarURL } = req.user;
  res.status(200).json({
    status: 'success',
    data: {
      user: {
        _id,
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = getCurrent;
