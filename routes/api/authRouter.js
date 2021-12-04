const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { authContoller } = require('../../controllers');
const { joiSignUpSchema, joiLoginSchema } = require('../../models/usersModel');

router.post(
  '/signup',
  validation(joiSignUpSchema),
  ctrlWrapper(authContoller.signUp)
);

module.exports = router;
