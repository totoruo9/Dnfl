import mongoose, { Schema } from "mongoose";

const PlanBoardSchema = new mongoose.Schema({
    title: {type:String, required: true},
    content: {type:String, required: true},
    setDate: {type:Date, required: true},
    category: {type:Date, required: true},
    owner: {type:Schema.Types.ObjectId, ref:"User"},
    createAt: {type:Date, default: Date.now}
});

const PlanBoard = mongoose.model("PlanBoard", PlanBoardSchema);

export default PlanBoard;