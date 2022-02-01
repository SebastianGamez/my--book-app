//modules imported
const express = require("express");
const db = require("mongoose");
const login = require("./routes/login");
const register = require("./routes/register");
const account = require("./routes/account");
const loans = require("./routes/loans");

const cors = require("cors");

//express
const app = express();

    //express middlewares
    app.use(cors());
    app.use("/my-book/login", login);
    app.use("/my-book/register", register);
    app.use("/my-book/account", account);
    app.use("/my-book/loans", loans);

//datebase configuration    
const connectToDatebase = () => {

    db.connect("mongodb://localhost:27017/my-book")
        .then(() => console.log("\tDatabase connected"))
        .catch((err) => console.log(`\tOcurred an error connecting the datebase:\n${err}`));

}
connectToDatebase();

//port configuration

const port = process.env.PORT || 4000;

app.listen(port, () => {

    console.log(`Listen at the ${port} port...`);

})