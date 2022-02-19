//modules imported
const express = require("express");
const tokenVerifycation = require("../middlewares/tokenVerification");
const Books =  require("../models/books_model");
const Users =  require("../models/user__model");
const { History } =  require("../models/history__model");

//express
const loans = express.Router();

    //express middlewares
    loans.use(express.urlencoded({extended: true}));
    loans.use(express.json());


//crud methods
loans.get("/", async(req, res) => {

    await Books.find({state: 'ready'})
        .then(solve => res.json(solve))
        .catch(err => res.status(404).json(err));

});
loans.get("/history/:userId", async(req, res) => {

    await Users.findById(req.params.userId)
        .then(solve => res.json(solve.history))
        .catch(err => res.status(404).json(err));


});
loans.get("/search/:title", async(req, res) => {

    console.log(req.query.title);

    await Books.findOne({title: req.params.title})
        .then(solve => res.json(solve))
        .catch(err => res.status(404).json(err));

});
loans.put("/reserve/:title/:userId", tokenVerifycation, async(req, res) => {

    Books.findOneAndUpdate(
        {$and: [{state: "ready"}, {title: req.params.title}]},
        {$set:
            {
                state: "reserved",
                borrowedTo: req.params.userId,
                borrowedDate: req.body.date,
                borrowedEnd: req.body.newDate
            }}, 
        {new: true},
        (err, solve) => {

            if (err) return res.status(404).json(err);
            
            res.json(solve);

            const newHistory = new History({

                title: req.params.title,
                date: req.body.date,
                state: solve.state,
                visible: true

            })

            Users.findByIdAndUpdate(req.params.userId, {$push:{history: newHistory}}, err => {

                if(err) return res.status(404).json(err);

            });

        }
    );
    
});
loans.put("/cancel/reserve/:id", tokenVerifycation, async(req, res) => {

    await Users.findById(req.body.userId)
        .then(result => {

            result.history.id(req.params.id).state = "cancelled";
            result.save();
            
            Books.findOneAndUpdate({title: req.body.title}, {state: "ready"}, {new: true}, (err) => {
        
                if (err) return res.status(404).json(err);
                res.json("Reserve cancelled");
        
            });

        });
    
    
});


//modules exported
module.exports = loans;