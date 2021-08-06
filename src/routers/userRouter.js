import express from "express";
import { getJoin, postJoin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/join").get(getJoin).post(postJoin);

export default userRouter;