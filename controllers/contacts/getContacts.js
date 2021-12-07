const { Contact } = require('../../models');

const getContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id email subscription');
  res.status(200).json({
    status: 'success',
    message: 'Show all contacts',
    data: {
      contacts,
    },
  });
};

module.exports = getContacts;
