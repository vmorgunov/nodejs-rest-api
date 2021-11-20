const Joi = require('joi');

module.exports = {
  contactsValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'org', 'ca', 'co.uk'] },
      }),

      phone: Joi.number().integer().min(8).max(14).required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error });
    }
    next();
  },
};
