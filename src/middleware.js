import multer from "multer";

export const localSession = (req, res, next) => {
    res.locals.loginState = Boolean(req.session.loginUser);
    res.locals.loginUser = req.session.loginUser || {};
    res.locals.siteName = "Dnf'L"
    next();
};

export const thumbUploader = multer({dest:"uploads/thumbnail/", limites: {
    fileSize: 1000000,
}})