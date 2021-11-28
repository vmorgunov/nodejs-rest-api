const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndDelete(contactId);
  if (!contact) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }

  res.status(200).json({
    status: 'success',
    message: 'Contact deleted',
    data: {
      contact,
    },
  });
};

module.exports = removeContact;
