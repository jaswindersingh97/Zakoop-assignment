const Joi = require('joi');

const schemas ={
    register: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            }),
        },
    login: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(), 
            }),
        },

};
module.exports = schemas;