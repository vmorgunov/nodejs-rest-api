const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const {
  joiContactSchema,
  statusJoiSchema,
} = require('../../models/contactsModel');
const { contactsController } = require('../../controllers');

router.get('/', ctrlWrapper(contactsController.getContacts));

router.get('/:contactId', ctrlWrapper(contactsController.getSingleContact));

router.post(
  '/',
  validation(joiContactSchema),
  ctrlWrapper(contactsController.createContact)
);

router.put(
  '/:contactId',
  validation(joiContactSchema),
  ctrlWrapper(contactsController.updateContact)
);

router.patch(
  '/:contactId/favorite',
  validation(statusJoiSchema),
  ctrlWrapper(contactsController.updateContactStatus)
);

router.delete('/:contactId', ctrlWrapper(contactsController.removeContact));

module.exports = router;
