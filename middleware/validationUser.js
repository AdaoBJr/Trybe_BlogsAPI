const RequestError = require('../helper/customErrors');

let err;

const validationEmail = (res, email) => {
    if (!email) {
        err = {
            status: 400,
            message: '"email" is required',
        };
        RequestError(res, err);
    }
    const isValid = /\w+@\w+/g.test(email);
    if (!isValid) {
        err = {
            status: 400,
            message: '"email" must be a valid email',
            };
        RequestError(res, err);
    }
};

const validationName = (res, displayName) => {
    if (displayName.length < 8) {
        err = {
        status: 400,
        message: '"displayName" length must be at least 8 characters long',
        };
        RequestError(res, err);
    }
};

const validationPassword = (res, password) => {
  if (!password) {
      err = {
          status: 400,
          message: '"password" is required',
      };
      RequestError(res, err);
  }
  if (password.length < 6) {
    err = {
        status: 400,
        message: '"password" length must be 6 characters long',
    };
    RequestError(res, err);
  }
};

// const = () => {
    
// }

module.exports = { validationEmail, validationName, validationPassword };