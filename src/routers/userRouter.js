import express from "express";
import { join } from "../controllers/userController";

const userRouter = express.Router();

userRouter.use("/join",join);

export default userRouter;