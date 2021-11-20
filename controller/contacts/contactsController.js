const contactsPath = require('../../db/contacts.json');

const listContacts = async (req, res) => {
  res.status(200).json({ contactsPath });
};

module.exports = {
  listContacts,
};
