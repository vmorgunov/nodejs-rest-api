const contactsOperation = require('../../model/contacts/index');

const getContacts = async (req, res) => {
  const contacts = await contactsOperation.listContacts();
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getContacts;
