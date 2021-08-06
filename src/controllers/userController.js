import User from "../models/User";
import bcrypt from "bcrypt";

export const join = async (req, res) => {
    const pageTitle = "Join";
    const {method} = req;

    if(method === "GET"){
        res.render("users/join", {pageTitle});
    } else if(method === "POST"){
        const {
            body:{username, password, password_confirm, user, email, number},
        } = req;
        const getUser = await User.findOne({username});
        console.log(getUser);
        if(getUser){
            return res.render("users/join", {pageTitle, errorMsg: "This username is alreay used"})
        };
    
        if(password !== password_confirm){
            return res.render("users/join", {pageTitle, errorMsg: "Is not matched password and password confirm"})
        };
    
        await User.create({
            username,
            password,
            password_confirm,
            user,
            email,
            number
        });
        res.redirect("/user/login");
    };
};

export const login = async (req, res) => {
    const pageTitle = "로그인";
    const RENDER_URL = "users/login";
    const {method} = req;

    if(method === "GET"){
        res.render(RENDER_URL, {pageTitle});
    } else if(method === "POST"){
        const {body:{username, password}} = req;

        const getUser = await User.findOne({username});
        if(!getUser){
            req.flash("error", "등록된 아이디가 없습니다.");
            return res.render(RENDER_URL, {pageTitle});
        };
        
        const match = await bcrypt.compare(password, getUser.password);
        if(!match){
            req.flash("error", "비밀번호가 일치하지 않습니다.");
            return res.render(RENDER_URL    , {pageTitle});
        }

        req.session.loginUser = getUser;    
        res.redirect("/");
    }
};