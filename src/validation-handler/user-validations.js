var jwt = require('jsonwebtoken');
const Joi = require('joi'); 

module.exports = class validation {

    async validationsignup(req, res, next) {
        const joiSchema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
          });
          const validationResult = joiSchema.validate({ name: req.body.name, email: req.body.email , password: req.body.password  }, { abortEarly: false });
          console.log(validationResult.error); 
           if (validationResult.error){
            res.status(300).send({data : validationResult.error.details[0].message})
           }else {
               next();
           }

        
      }
      async validationlogin(req, res, next) {
        const joiSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
          });
          const validationResult = joiSchema.validate({ email: req.body.email , password: req.body.password  }, { abortEarly: false });
          console.log(validationResult.error); 
           if (validationResult.error){
            res.status(300).send({data : validationResult.error.details[0].message})
           }else {
               next();
           }

        
      }
}
