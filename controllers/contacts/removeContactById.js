const { NotFound } = require('http-errors');
const contactsOperation = require('../../model/contacts');

const removeContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperation.removeContactById(id);
  if (!result) {
    throw new NotFound(`Contact with id ${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Product deleted',
    data: {
      result,
    },
  });
};

module.exports = removeContactById;
