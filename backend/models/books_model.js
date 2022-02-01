//modules imported
const db = require("mongoose");

//mongoose schema
const Schema = new db.Schema({

    title: {

        type: String,
        required: true

    },
    author: {

        type: String,
        required: true

    },
    state:{

        type: String,
        required: true

    },
    borrowedTo: {
        type: String,
        required: false   
    },
    borrowedDate: {
        type: String,
        required: false

    },
    borrowedEnd: {
        type: String,
        required: false

    }


});

//modules imported
module.exports = db.model("books", (Schema), "books");