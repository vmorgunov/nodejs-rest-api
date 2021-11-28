const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!contact) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }

  res.status(200).json({
    status: 'success',
    message: 'Contact updated',
    data: {
      contact,
    },
  });
};

module.exports = updateContact;
