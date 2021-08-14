import express from 'express';
import { boardList, read, writing, studyCalender } from '../controllers/boardController';

import { thumbUploader } from '../middleware';

const boardRouter = express.Router();

boardRouter.route("/write").get(writing).post(thumbUploader.fields([
    {name: "thumb", maxCount:1}
]),writing);

boardRouter.get("/list", boardList);
boardRouter.get("/:id([0-9a-f]{24})", read);
boardRouter.get("/calender", studyCalender);

export default boardRouter;