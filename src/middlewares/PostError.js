/* eslint-disable complexity */
const checkErrorType = (error) => {
  switch (true) {
    case error.isJoi:
      return { code: 400, message: error.details[0].message };
    case error.categoryNotFound:
    case error.noEdit:
      return { code: 400, message: error.message };
    case error.postNotFound:
      return { code: 404, message: error.message };
    case error.invalidUser:
      return { code: 401, message: error.message };

    default:
      return { code: 500, message: error };
  }
};

module.exports = (err, _req, res, next) => {
  const { code, message } = checkErrorType(err);
  console.log(err);

  res.status(code).json({ message });

  next();
};
