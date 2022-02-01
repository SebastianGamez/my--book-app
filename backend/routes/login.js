//modules imported
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/user__model");


//express
const login = express.Router();

    //express middlewares
    login.use(express.urlencoded({extended: true}));
    login.use(express.json());

//crud methods
login.post("/", (req, res) => {

    Users.findOne({email:req.body.email})
        .then(result => {
            
            if (!result) return res.status(401).json({err:"Email or password incorrect"})
            
            const passwordValidation = bcrypt.compareSync(req.body.password, result.password);

            if (!passwordValidation) return res.status(401).json({err:"Email or password incorrect"})

            const token = jwt.sign({data: {username: result.username, email: result.email}}, 'password', { expiresIn: 60 * 15 });
            
            data = {
                username: result.username,
                id: result.id,
                token: token
            }            

            res.json(data);

        })

});
   
    

//modules exported
module.exports = login;