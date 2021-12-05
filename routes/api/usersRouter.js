const express = require('express');
const router = express.Router();

const { auth, ctrlWrapper } = require('../../middlewares');
const { usersController } = require('../../controllers');

router.get('/current', auth, ctrlWrapper(usersController.getCurrent));
router.patch('/:userId', ctrlWrapper(usersController.updateUser));

module.exports = router;
