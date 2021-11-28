const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const updateContactStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!contact) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }

  res.status(200).json({
    status: 'success',
    message: 'Contact status updated',
    data: {
      contact,
    },
  });
};

module.exports = updateContactStatus;
