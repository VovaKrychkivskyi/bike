const {Router} = require(`express`);
const {
  copController: {
    createCop,
    readCop,
    updateCop,
    deleteCop,
    readAllCops
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
copsRouter.get(`/all`, readAllCops);
copsRouter.post(`/`, existCopDBFalse, createCop);
copsRouter.patch(`/`, existCopDBTrue, updateCop);
copsRouter.delete(`/`, existCopDBTrue, deleteCop);

module.exports = copsRouter;