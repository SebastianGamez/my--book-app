//modules imported
const db = require("mongoose");

//mongoose schema
const Schema = new db.Schema( {

    title:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    visible:{
        type: Boolean,
        required: true
    }

})

//modules imported
module.exports = {
    History: db.model("history", (Schema)),
    historySchema: Schema
};