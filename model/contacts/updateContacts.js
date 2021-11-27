const fs = require('fs/promises');

const filePath = require('./filePath');

const updateContacts = async (contact) => {
  await fs.writeFile(filePath, JSON.stringify(contact));
};

module.exports = updateContacts;
