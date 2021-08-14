import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User"
import "./models/Board"
import app from "./server";

const PORT = 4000;

const handleListen = () => {
    console.log(`✅ Start server http://localhost:${PORT}`);
}

app.listen(PORT, handleListen);