import express from "express";
import boardRouter from "./routers/boardRouter";
import rootRouter from "./routers/rootRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

const handleListen = (req, res) => {
    console.log(`Start server http://localhost:${PORT}`);
}

app.use(express.urlencoded({extended: true}));

app.use("/static", express.static("assets"));
app.use("/node_modules", express.static("node_modules"));
app.use("/", rootRouter);
app.use("/board", boardRouter);

app.listen(PORT, handleListen);