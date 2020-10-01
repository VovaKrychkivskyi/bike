const {
  userService: {
    checkUserService
  }
} = require(`../../services`);

const {ErrorHandler, errors, statusCodes} = require(`../../errors`)

module.exports = async (req, res, next) => {
  try {
    const {owner_email} = req.body;
    const user = await checkUserService(owner_email)
    if (!user) {
      return next(new ErrorHandler(
        statusCodes.NOT_FOUND,
        errors.NOT_FOUND_USER.message,
        errors.NOT_FOUND_USER.code
      ))
    }

    req.user = user;
    next()

  } catch (e) {
    next(e)
  }
}