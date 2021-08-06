import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localSession } from "./middleware";
import flash from "express-flash";
import boardRouter from "./routers/boardRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

app.use(express.urlencoded({extended: true}));

app.use(session({
    secret:"keyboard cat",
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 1800000,
    // },
    store: MongoStore.create({mongoUrl: process.env.DB_URL})
}));

app.use(localSession);
app.use(flash());

app.use("/static", express.static("assets"));
app.use("/node_modules", express.static("node_modules"));
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/board", boardRouter);

export default app;