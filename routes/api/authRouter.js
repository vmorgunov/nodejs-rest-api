const express = require('express');
const router = express.Router();

const { auth, validation, ctrlWrapper } = require('../../middlewares');
const { authController } = require('../../controllers');
const { joiSignUpSchema, joiLoginSchema } = require('../../models/usersModel');

router.post(
  '/signup',
  validation(joiSignUpSchema),
  ctrlWrapper(authController.signup)
);

router.post(
  '/login',
  validation(joiLoginSchema),
  ctrlWrapper(authController.login)
);
router.get('/logout', auth, ctrlWrapper(authController.logout));

module.exports = router;
