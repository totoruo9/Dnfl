export const home = (req, res) => {
    res.render("home", {pageTitle: "Home"});
}

export const writing = (req, res) => {
    res.send("writing");
}