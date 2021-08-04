import express from "express";
import { home } from "../controllers/board";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;