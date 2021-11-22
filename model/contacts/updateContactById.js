const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const updateContactsById = async (id, data) => {
  const contacts = await listContacts();
  const removeIndex = contacts.findIndex((item) => item.id === id);
  if (removeIndex === -1) {
    return null;
  }
  contacts[removeIndex] = { id, ...data };
  await updateContacts(contacts);
  return contacts[removeIndex];
};

module.exports = updateContactsById;
