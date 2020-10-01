const {Router} = require(`express`);
const {
  copController: {
    createCop,
    readCop,
    updateCop,
    deleteCop
  }
} = require(`../controllers`);

const {
  copMiddleware: {
    existCopDBFalse,
    existCopDBTrue
  }
} = require(`../middlewares`);

const copsRouter = Router();

copsRouter.get(`/`, existCopDBTrue, readCop);
copsRouter.post(`/`, existCopDBFalse, createCop);
copsRouter.patch(`/`, existCopDBTrue, updateCop);
copsRouter.delete(`/`, existCopDBTrue, deleteCop);

module.exports = copsRouter;