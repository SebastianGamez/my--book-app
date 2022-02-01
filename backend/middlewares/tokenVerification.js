//modules imported
const express = require("express");
const jwt = require("jsonwebtoken");

//express
const auth = express.Router()
    //express middlewares
    auth.use(express.json());

function verifyToken(req, res, next){

    jwt.verify(req.body.token, "password", (err, decoded) => {

        if(err) return res.status(401).json({err:"User no logged"});
    
        next();
    
    });

}

module.exports = verifyToken;