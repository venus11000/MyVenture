const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require('path');

//  Routes
const appointmentRoutes = require("./routes/appointment");
const categoryRoutes = require("./routes/category");
const subCategoryRoutes = require("./routes/subCategory");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

//  app
const app = express();

//  db
mongoose
    .connect("mongodb://localhost/my-venture", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

//  middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(expressValidator());

//  routes
app.use("/api/appointment/", appointmentRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/sub-category/", subCategoryRoutes);
app.use("/api/product/", productRoutes);
app.use("/api/user/", userRoutes);

//  static files
app.use('/api/static', express.static(path.join(__dirname, 'static')));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
