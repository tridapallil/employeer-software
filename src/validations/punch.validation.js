const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPunch = {
  params: Joi.object().keys({
    employeeId: Joi.string().custom(objectId),
  }),
};

const getUser = {
  params: Joi.object().keys({
    punchId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  getUser,
  createPunch,
};
