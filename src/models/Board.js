import mongoose, { Schema } from "mongoose";

const BoardSchema = new mongoose.Schema({
    subject: {type:String, required: true},
    content: {type:String, required: true},
    thumbUrl: {type:String},
    owner: {type:Schema.Types.ObjectId, ref:"User"},
    createAt: {type:Date, default: Date.now}
});

const Board = mongoose.model("Board", BoardSchema);

export default Board;