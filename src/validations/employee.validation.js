const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEmployee = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    role: Joi.string().required(),
    contractType: Joi.string().required(),
    hourlyPrice: Joi.number().required(),
  }),
};

const getEmployees = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    contractType: Joi.string(),
    hourlyPrice: Joi.number(),
  }),
};

const getSalary = {
  query: Joi.object().keys({
    month: Joi.number().required(),
  }),
};

const getEmployee = {
  params: Joi.object().keys({
    employeeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  getSalary,
};
