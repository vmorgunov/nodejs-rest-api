const { Schema, model } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Enter email adress'],
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
};
