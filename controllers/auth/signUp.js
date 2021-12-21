const { User } = require('../../models');
const { Conflict } = require('http-errors');
const gravatar = require('gravatar');
const { sendEmail } = require('../../helpers');

const { v4 } = require('uuid');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const verifyToken = v4();

  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL, verifyToken });

  newUser.setPassword(password);
  await newUser.save();

  const msg = {
    to: email,
    subject: 'Confirm your email',
    html: `<a target="_blank" href="http://localhost:8080/api/users/verify/${verifyToken}">Confirm email</a>`,
  };
  await sendEmail(msg);

  res.status(201).json({
    status: 'success',
    message: 'User created',
    data: {
      user: {
        email,
        avatarURL,
        verifyToken,
      },
    },
  });
};

module.exports = signup;
