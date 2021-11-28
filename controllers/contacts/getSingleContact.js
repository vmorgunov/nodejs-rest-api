const { Contact } = require('../../models');
const { NotFound } = require('http-errors');

const getSingleContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }
  res.status(200).json({
    status: 'success',
    message: 'Show single contact',
    data: {
      contact,
    },
  });
};

module.exports = getSingleContact;
