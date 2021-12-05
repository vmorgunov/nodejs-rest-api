const { Contact } = require('../../models');

const createContact = async (req, res) => {
  const { _id } = req.user;
  const contact = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: 'success',
    message: 'Contact created',
    data: {
      contact,
    },
  });
};

module.exports = createContact;
