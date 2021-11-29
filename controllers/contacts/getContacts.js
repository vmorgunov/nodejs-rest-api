const { Contact } = require('../../models');

const getContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json({
    status: 'success',
    message: 'Show all contacts',
    data: {
      contacts,
    },
  });
};

module.exports = getContacts;
