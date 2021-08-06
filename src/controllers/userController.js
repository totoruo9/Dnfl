import User from "../models/User";

export const join = async (req, res) => {
    const pageTitle = "Join";
    const {method} = req;

    if(method === "GET"){
        res.render("user/join", {pageTitle});
    } else if(method === "POST"){
        const {
            body:{username, password, password_confirm, user, email, number},
        } = req;
        const getUser = await User.findOne({username});
        console.log(getUser);
        if(getUser){
            return res.render("user/join", {pageTitle, errorMsg: "This username is alreay used"})
        };
    
        if(password !== password_confirm){
            return res.render("user/join", {pageTitle, errorMsg: "Is not matched password and password confirm"})
        };
    
        await User.create({
            username,
            password,
            password_confirm,
            user,
            email,
            number
        })
        res.redirect("/user/login");
    }
}

export const login = (req, res) => {
    res.send("login")
}