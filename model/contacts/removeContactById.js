const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = await contacts.findIndex((i) => String(i.id) === contactId);
  if (idx === -1) {
    return null;
  }
  const removedContact = await contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removedContact;
};

module.exports = removeContact;
