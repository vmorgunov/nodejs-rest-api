const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');
const { contactSchema } = require('../../schemas');

const validationMiddleware = validation(contactSchema);

router.get('/', ctrlWrapper(ctrl.getContacts));

router.get('/:id', ctrlWrapper(ctrl.getContactById));

router.post('/', validationMiddleware, ctrlWrapper(ctrl.postContact));

router.delete('/:id', ctrlWrapper(ctrl.removeContactById));

router.put('/:id', validationMiddleware, ctrlWrapper(ctrl.putContact));

module.exports = router;
