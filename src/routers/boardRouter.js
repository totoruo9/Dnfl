import express from 'express';
import { writing } from '../controllers/boardController';

const boardRouter = express.Router();

boardRouter.get("/writing", writing);


export default boardRouter;