const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const removeContact = async (id) => {
  const contacts = await listContacts();
  const removeIndex = await contacts.findIndex((i) => i.id === id);
  if (removeIndex === -1) {
    return null;
  }
  const removedContact = await contacts.splice(removeIndex, 1);
  await updateContacts(contacts);
  return removedContact;
};

module.exports = removeContact;
