const { NotFound, BadRequest } = require('http-errors');
const { User } = require('../../models');
const { sendEmail } = require('../../helpers');

const reverification = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new NotFound('missing required field email');
  }

  const user = await User.findOne({ email });

  if (user.verify) {
    res.status(400).json({
      message: 'Verification has already been passed',
    });
  } else {
    const msg = {
      to: email,
      subject: 'Confirm your email',
      html: `<a target="_blank" href="http://localhost:8080/api/users/verify/${user.verifyToken}">Confirm email</a>`,
    };
    await sendEmail(msg);

    res.status(200).json({ message: 'Verification email sent' });
  }
};

module.exports = reverification;
