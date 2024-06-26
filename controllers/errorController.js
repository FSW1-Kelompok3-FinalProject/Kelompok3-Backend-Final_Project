const apiError = require("../utils/apiError")

module.exports = {
  onError(err, req, res, next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status;
    err.message = err.message;

    res.status(err.statusCode).send({
      is_success: false,
      code: err.statusCode,
      data: {},
      message: err.message,
    });
  },

  onLost(req, res, next) {
    next(new apiError("Route not found", 404));
  }
}