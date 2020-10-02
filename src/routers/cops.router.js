const {Router} = require(`express`);
const {
  copController: {
    createCop,
    readCop,
    updateCop,
    deleteCop,
    readAllCops,
    readAllProcess
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
copsRouter.get(`/process`, readAllProcess);
copsRouter.post(`/`, existCopDBFalse, createCop);
copsRouter.patch(`/`, existCopDBTrue, updateCop);
copsRouter.delete(`/`, existCopDBTrue, deleteCop);

module.exports = copsRouter;