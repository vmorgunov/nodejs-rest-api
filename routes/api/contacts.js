const express = require('express');
const router = express.Router();

const { contactsController } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiSchema } = require('../../models');

const validationMiddleware = validation(joiSchema);

router.get('/', ctrlWrapper(contactsController.getContacts));

router.get('/:contactId', ctrlWrapper(contactsController.getSingleContact));

router.post(
  '/',
  validationMiddleware,
  ctrlWrapper(contactsController.createContact)
);

router.put(
  '/:contactId',
  validationMiddleware,
  ctrlWrapper(contactsController.updateContact)
);

router.delete('/:contactId', ctrlWrapper(contactsController.removeContact));

module.exports = router;
