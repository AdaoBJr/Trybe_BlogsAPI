const Joi = require('joi');

const { Constants } = require('../constants');

class JoiValidation {
  static userSchema() {
    return Joi.object({
      displayName: Joi.string().min(Constants.DISPLAY_NAME_MIN_CHARACTERS).required(),
      email: Joi.string().regex(/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i).required(),
      password: Joi.string().min(Constants.PASSWORD_MIN_CHARACTERS).required(),
      image: Joi.optional(),
    });
  }
}

module.exports = JoiValidation;