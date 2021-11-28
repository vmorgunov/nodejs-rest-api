const getContacts = require('./getContacts');
const getSingleContact = require('./getSingleContact');
const createContact = require('./createContact');
const updateContact = require('./updateContact');
const removeContact = require('./removeContact');
const updateContactStatus = require('./updateContactStatus');

module.exports = {
  getContacts,
  getSingleContact,
  createContact,
  updateContact,
  removeContact,
  updateContactStatus,
};
