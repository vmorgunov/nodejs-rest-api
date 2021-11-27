const express = require('express');
const router = express.Router();

const { contacts: ctrl } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');
const { contactSchema } = require('../../schemas');

const validationMiddleware = validation(contactSchema);

router.get('/', ctrlWrapper(ctrl.getContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validationMiddleware, ctrlWrapper(ctrl.postContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeContactById));

router.put('/:contactId', validationMiddleware, ctrlWrapper(ctrl.putContact));

module.exports = router;
