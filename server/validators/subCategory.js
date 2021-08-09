exports.validateCategory = (req, res, next) => {
    var data = req.body;
    if (!(data.name && data.key)) res.status(400).json({ "message": "Invalid data!" });
    next();
}