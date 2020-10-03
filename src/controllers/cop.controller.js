const {
  copService: {
    createCopService,
    checkCopService,
    updateCopService,
    deleteCopService,
    getAllFreeCops
  },
  statService: {
    getAllProcess
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
  },

  readAllCops: async (req, res, next) => {
    try {
      const allCops = await getAllFreeCops()
      res.json(allCops)

    } catch (e) {
      next(e)
    }
  },

  readAllProcess: async (req, res, next) => {
    try {
      const allProcess = await getAllProcess()
      res.json(allProcess)

    } catch (e) {
      next(e)
    }
  }
}
