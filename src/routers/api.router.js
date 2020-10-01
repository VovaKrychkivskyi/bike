const {Router} = require(`express`);

const {copsRouter} = require(`./`);

const apiRouter = Router();

apiRouter.use(`/cops`, copsRouter);


module.exports = apiRouter;