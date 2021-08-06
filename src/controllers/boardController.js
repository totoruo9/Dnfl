import Board from "../models/Board";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home"});
}

export const boardList = async(req, res) => {
    const getBoard = await Board.find({}).populate({
        path: "owner"
    });
    console.log(getBoard);
    const currentUserId = req.session
    console.log(currentUserId);
    res.render("boards/list", {pageTitle:"Board List", getBoard});
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
        
        const files = thumb[0].destination+thumb[0].filename;
        await Board.create({
            subject,
            content:subject_content,
            files,
            owner:_id
        })
        
        res.redirect("/board/list");
    }
}