const express = require('express');
const router = express.Router();

const {
  listContacts,
} = require('../../controller/contacts/contactsController');

const {
  contactsValidation,
} = require('../../middlewares/validationMiddlewares');

router.get('/', listContacts);

router.get('/:contactId');

router.post('/', contactsValidation);

router.delete('/:contactId');

router.patch('/:contactId', contactsValidation);

module.exports = router;
