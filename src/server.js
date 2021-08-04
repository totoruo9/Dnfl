import express from "express";
import rootRouter from "./routers/rootRouter";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")

const handleListen = (req, res) => {
    console.log(`Start server http://localhost:${PORT}`);
}

app.use("/", rootRouter);

app.listen(PORT, handleListen);