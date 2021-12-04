const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { authController } = require('../../controllers');
const { joiSignUpSchema, joiLoginSchema } = require('../../models/usersModel');

router.post(
  '/signup',
  validation(joiSignUpSchema),
  ctrlWrapper(authController.signUp)
);

module.exports = router;
