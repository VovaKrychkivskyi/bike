const {
  userService: {
    createUserService,
    checkUserService,
    updateUserService,
    deleteUserService
  }
} = require(`../services`);

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const user = await createUserService(req.body)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  readUser: async (req, res, next) => {
    try {

      res.json(req.user)

    } catch (e) {
      next(e)
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const user = await updateUserService(req.body.status, req.body.owner_email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  deleteUser: async (req, res, next) => {
    try {
      const user = await deleteUserService(req.body.owner_email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  }
}