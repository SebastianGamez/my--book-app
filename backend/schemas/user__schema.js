//modules imported
const Joi = require("joi");

//joi
const schema = Joi.object({
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'co'] } }),
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),
    
    password: Joi.string()

});

//modules imported
module.exports = schema;