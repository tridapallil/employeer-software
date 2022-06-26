const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { employeeService } = require('../services');

const createEmployee = catchAsync(async (req, res) => {
  const employee = await employeeService.createEmployee({ ...req.body, userId: req.user._id });
  res.status(httpStatus.CREATED).send(employee);
});

const getEmployees = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await employeeService.queryEmployees(filter, options);
  res.send(result);
});

const getEmployee = catchAsync(async (req, res) => {
  const employee = await employeeService.getEmployeeById(req.params.employeeId);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee not found');
  }
  res.send(employee);
});

const getSalary = catchAsync(async (req, res) => {
  const salary = await employeeService.getEmployeeSalaryByMonth(req.params.employeeId, req.query.month);
  if (!salary) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Salary not found');
  }
  res.send(salary);
});

module.exports = {
  createEmployee,
  getEmployees,
  getEmployee,
  getSalary,
};
