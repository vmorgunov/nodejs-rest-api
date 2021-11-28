const express = require('express');
const router = express.Router();

const { contactsController } = require('../../controllers');

const { validation, ctrlWrapper } = require('../../middlewares');
const { joiSchema, statusJoiSchema } = require('../../models');

router.get('/', ctrlWrapper(contactsController.getContacts));

router.get('/:contactId', ctrlWrapper(contactsController.getSingleContact));

router.post(
  '/',
  validation(joiSchema),
  ctrlWrapper(contactsController.createContact)
);

router.put(
  '/:contactId',
  validation(joiSchema),
  ctrlWrapper(contactsController.updateContact)
);

router.patch(
  '/:contactId/favorite',
  validation(statusJoiSchema),
  ctrlWrapper(contactsController.updateContactStatus)
);

router.delete('/:contactId', ctrlWrapper(contactsController.removeContact));

module.exports = router;
