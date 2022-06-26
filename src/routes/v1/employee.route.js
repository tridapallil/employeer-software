const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const employeeValidation = require('../../validations/employee.validation');
const employeeController = require('../../controllers/employee.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), validate(employeeValidation.createEmployee), employeeController.createEmployee)
  .get(auth('getEmployees'), validate(employeeValidation.getEmployees), employeeController.getEmployees);

router
  .route('/:employee')
  .get(auth('getEmployees'), validate(employeeValidation.getEmployee), employeeController.getEmployee);

router
  .route('/:employee/get-salary')
  .get(auth('getEmployees'), validate(employeeValidation.getSalary), employeeController.getSalary);

module.exports = router;
