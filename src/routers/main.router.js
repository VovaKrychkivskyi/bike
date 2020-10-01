const {Router} = require(`express`);
const {apiRouter,userRouter} = require(`./`)
const mainRouter = Router();

mainRouter.use(`/api`, apiRouter);
mainRouter.use(`/users`, userRouter);


module.exports = mainRouter;