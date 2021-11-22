const { v4: uuidv4 } = require('uuid');
const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { id: uuidv4(), ...data };

  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
