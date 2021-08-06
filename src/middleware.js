export const localSession = (req, res, next) => {
    res.locals.loginState = Boolean(req.session.loginUser);
    res.locals.loginUser = req.session.loginUser || {};
    res.locals.siteName = "Dnf'L"
    console.log(res.locals);
    next();
};