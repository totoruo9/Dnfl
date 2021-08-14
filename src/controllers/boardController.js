import { render } from "pug";
import Board from "../models/Board";
import User from "../models/User";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home"});
}

export const boardList = async(req, res) => {
    const getBoard = await Board.find({}).populate({
        path: "owner"
    });

    console.log(getBoard);

    res.render("boards/list", {pageTitle:"Board List", getBoard});
}

export const read = async(req, res) => {
    const pageTitle = "Read";
    const {params: {id}} = req;
    const getBoard = await Board.findById(id);
    console.log(getBoard)
    res.render("boards/read", {pageTitle, getBoard});
}

export const writing = async(req, res) => {
    const pageTitle = "Writing"
    const {method} = req;

    if(method === "GET"){
        const writing = await Board.find({});
        res.render("boards/write",{pageTitle});
    }else if(method === "POST"){
        const { 
            body:{subject, subject_content},
            files: {thumb},
            session: {loginUser:{_id}}
        } = req;

        if(!_id){
            req.flash("error", "로그인 후 이용하실 수 있습니다.")
            return res.redirect("/boards/list");
        }
        
        const currentUser = await User.findById(_id);
        
        await Board.create({
            subject,
            content:subject_content,
            thumbUrl:(thumb[0].destination+thumb[0].filename) || [],
            owner:_id
        })

        currentUser.writing.push(_id);
        currentUser.save();
        
        res.redirect("/board/list");
    }
}

export const studyCalender = (req, res) => {
    res.render("boards/calender", {pageTitle:"Calender"});
}