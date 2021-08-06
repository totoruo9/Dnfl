import Board from "../models/Board";

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home"});
}

export const writing = async(req, res) => {
    const pageTitle = "Writing"
    const {method} = req;

    if(method === "GET"){
        const writing = await Board.find({});
        console.log(req.session)
        console.log(writing);
        res.render("board/write",{pageTitle});
    }else if(method === "POST"){
        const { 
            body:{subject, subject_content},
            files: {thumb},
            session: {loginUser:{_id}}
        } = req;
        
        const files = thumb[0].destination+thumb[0].filename;
        console.log(subject, subject_content, _id);
        await Board.create({
            subject,
            content:subject_content,
            files,
            owner:_id
        })
        
        res.redirect("/board/write");
    }
}