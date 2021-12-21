const express = require('express');
const router = express.Router();

const { auth, upload, ctrlWrapper } = require('../../middlewares');
const { usersController } = require('../../controllers');

router.get('/current', auth, ctrlWrapper(usersController.getCurrent));

router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  ctrlWrapper(usersController.updateAvatar),
);

router.patch('/:userId', ctrlWrapper(usersController.updateUserSubscription));

router.get('/verify/:verifyToken', ctrlWrapper(usersController.verifyEmail));

router.post('/verify', ctrlWrapper(usersController.reverification));

module.exports = router;
