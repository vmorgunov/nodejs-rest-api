const { NotFound } = require('http-errors');
const contactsOperation = require('../../model/contacts');

const putContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateContactsById(
    contactId,
    req.body
  );
  if (!result) {
    throw new NotFound(`Contact with id ${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = putContact;
