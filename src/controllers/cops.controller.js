const {
  copService: {
    createCopService,
    checkCopService,
    updateCopService,
    deleteCopService
  }
} = require(`../services`);

module.exports = {
  createCop: async (req, res, next) => {
    try {
      const user = await createCopService(req.body)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },
  readCop: async (req, res, next) => {
    try {
      res.json(req.user)

    } catch (e) {
      next(e)
    }
  },

  updateCop: async (req, res, next) => {
    try {
      const user = await updateCopService(req.body.name, req.body.email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  },

  deleteCop: async (req, res, next) => {
    try {
      const user = await deleteCopService(req.body.email)
      res.json(user)

    } catch (e) {
      next(e)
    }
  }
}
