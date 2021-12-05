const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const {
  joiContactSchema,
  statusJoiSchema,
} = require('../../models/contactsModel');
const { contactsController } = require('../../controllers');

router.get('/', auth, ctrlWrapper(contactsController.getContacts));

router.get('/:contactId', ctrlWrapper(contactsController.getSingleContact));

router.post(
  '/',
  auth,
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
