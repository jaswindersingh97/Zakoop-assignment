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
    createOrder:{
        body: Joi.object({
            items: Joi.array().items(
                Joi.object({
                  Product: Joi.string().hex().length(24).required(),
                  qty: Joi.number().integer().min(1).required()
                })
              ).min(1).required(),
            storeId:   Joi.string().hex().length(24).required()
        })
    }    

};
module.exports = schemas;