const {Router} = require(`express`);

const {
  userController: {
    createUser,
    readUser,
    updateUser,
    deleteUser
  }
} = require(`../controllers`);

const {
  userMiddleware: {
    existUserDBTrue,
  }
} = require(`../middlewares`);

const userRouter = Router();

userRouter.get(`/`, existUserDBTrue, readUser);
userRouter.post(`/`, createUser);
userRouter.patch(`/`, existUserDBTrue, updateUser);
userRouter.delete(`/`, existUserDBTrue, deleteUser);

module.exports = userRouter;
