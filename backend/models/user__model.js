//modules imported
const db = require("mongoose");
const { historySchema } = require("./history__model");

//mongoose schema
const Schema = new db.Schema({

    username: {

        type: String,
        required: true

    },
    password: {

        type: String,
        required: true

    },
    email:{

        type: String,
        required: true

    },
    status: {

        type: Boolean,
        default: true,
        required: true

    },
    history: [ historySchema ]

});

//modules imported
module.exports = db.model("users", (Schema));