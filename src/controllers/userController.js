import User from "../models/User";


export const getJoin = (req, res) => {
    res.render("user/join", {pageTite: "Join"});
}

export const postJoin = async (req, res) => {
    const {body:{username, password, password_confirm, user, email, number}} = req;
    const getUser = User.findOne(username);

    if(getUser){
        return res.render("user/join", {pasgeTitle, errorMsg: "This username is alreay used"})
    };

    if(password !== password_confirm){
        return res.render("user/join", {pasgeTitle, errorMsg: "Is not matched password and password confirm"})
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