//modules imported
const express = require("express");
const bcrypt = require("bcrypt");
const schema = require("../schemas/user__schema");
const Users = require("../models/user__model");

//express
const register = express.Router();

    //express middlewares
    register.use(express.json());


//crud methods

register.post("/", (req, res) => {

    createUser(req, res);

});

//datebase functions

async function createUser (req, res){

    const schemaValidate = schema.validate({

        username: req.body.username,
        email: req.body.email,
        password: req.body.password,

    });

    if (!req.body.password === req.body.confirm_password) return res.status(401).json({error:"Please check your information"});
        
        if (schemaValidate.error) return res.status(401).json({error:"Please check your information"});
        await Users.findOne({email:req.body.email})
                .then(result => {

                    if(result) return res.status(401).json({err:"This email was registred before"})
                                            
                    const User = new Users({
                        username: req.body.username,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10)
                    });

                    (async(res)=> {

                        await User.save()
                            .then( () => res.json(`You are registred`))
                            .catch(err => {
                                
                                console.log("Ocurred an error saving the user at the datebase");
                                res.status(404).json({
                
                                    error: err
                
                                });

                            })

                    })(res);
                    
                });
    
}

//modules exported
module.exports = register;