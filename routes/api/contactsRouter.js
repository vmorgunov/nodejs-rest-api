const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const {
  joiContactSchema,
  statusJoiSchema,
} = require('../../models/contactsModel');
const { contactsController } = require('../../controllers');

router.get('/', auth, ctrlWrapper(contactsController.getContacts));

router.get(
  '/:contactId',
  auth,
  ctrlWrapper(contactsController.getSingleContact)
);

router.post(
  '/',
  auth,
  validation(joiContactSchema),
  ctrlWrapper(contactsController.createContact)
);

router.put(
  '/:contactId',
  auth,
  validation(joiContactSchema),
  ctrlWrapper(contactsController.updateContact)
);

router.patch(
  '/:contactId/favorite',
  auth,
  validation(statusJoiSchema),
  ctrlWrapper(contactsController.updateContactStatus)
);

router.delete(
  '/:contactId',
  auth,
  ctrlWrapper(contactsController.removeContact)
);

module.exports = router;
