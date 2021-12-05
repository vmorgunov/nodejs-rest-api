const app = require('../app');
const mongoose = require('mongoose');
const colors = require('colors');

const { DB_HOST, PORT = 3000, DB_NAME } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connection successful`.yellow.bold);
      console.log(`Database name: ${DB_NAME}`.yellow.bold);
      console.log(`Server listening on port: ${PORT}`.yellow.bold);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
