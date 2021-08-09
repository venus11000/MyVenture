const path = require("path");
const multer = require("multer");

const storage = (folderName) => multer.diskStorage({
    destination: "./static/images/" + folderName + "/",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

module.exports = { storage, imageFilter };