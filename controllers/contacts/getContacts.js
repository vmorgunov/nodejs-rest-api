const { Contact } = require('../../models');

const getContacts = async (req, res) => {
  const { _id } = req.user;
  const contacts = await Contact.find({ owner: _id }).populate(
    'owner',
    '_id email subscription'
  );
  res.status(200).json({
    status: 'success',
    message: 'Show all contacts',
    data: {
      contacts,
    },
  });
};

module.exports = getContacts;
