const {Router} = require(`express`);

const {
  userController: {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    readAllUser
  }
} = require(`../controllers`);

const {
  userMiddleware: {
    existUserDBTrue,
  }
} = require(`../middlewares`);

const userRouter = Router();

userRouter.get(`/`, existUserDBTrue, readUser);
userRouter.get(`/all`, readAllUser);
userRouter.post(`/`, createUser);
userRouter.patch(`/`, existUserDBTrue, updateUser);
userRouter.delete(`/`, existUserDBTrue, deleteUser);

module.exports = userRouter;
