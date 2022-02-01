//modules imported
const express = require("express");
const tokenVerifycation = require("../middlewares/tokenVerification");


//express
const account = express.Router();

    //express middlewares
    account.use(express.urlencoded({extended: true}));
    account.use(express.json());

//crud methods
account.post("/", tokenVerifycation, (req, res) => {

    res.json({mesagge: "User validate succesfully"})

});
   
    

//modules exported
module.exports = account;