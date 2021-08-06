import express from "express";
import { join, login } from "../controllers/userController";

const userRouter = express.Router();

userRouter.use("/join", join);
userRouter.use("/login", login);

export default userRouter;