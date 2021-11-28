const { Contact } = require('../../models');

const createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Contact created',
    data: {
      contact,
    },
  });
};

module.exports = createContact;
