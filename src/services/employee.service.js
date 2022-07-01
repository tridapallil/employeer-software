const { Employee } = require('../models');
const { getWorkedHours } = require('../utils/helpers');

/**
 * Create a employee
 * @param {Object} employeeBody
 * @returns {Promise<Employee>}
 */
const createEmployee = async (employeeBody) => {
  return Employee.create(employeeBody);
};

/**
 * Query for employees
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryEmployees = async (filter, options) => {
  const employees = await Employee.paginate(filter, options);
  return employees;
};

/**
 * Get employee by id
 * @param {ObjectId} id
 * @returns {Promise<Employee>}
 */
const getEmployeeById = async (id) => {
  return Employee.findById(id);
};

/**
 *
 * @param {Array} punches
 * @param {number} hourlyPrice
 * @returns {Number}
 */
const calculateSalary = (punches, hourlyPrice) => {
  const workedHours = getWorkedHours(punches);
  return workedHours * hourlyPrice;
};

/**
 * Get employee salary by id and month
 * @param {ObjectId} id
 * @param {number} month
 * @returns {Salary}
 */
const getEmployeeSalaryByMonth = async (id, month) => {
  // const employee = await getEmployeeById(id);
  console.log(Employee);
  const employee = await Employee.findOne({ _id: id });

  console.log(employee);
  const monthPunches = await employee.getMonthPunches(month);
  console.log(monthPunches);
  const hourlyPrice = employee.getHourlyAditionalPrice();
  const salary = calculateSalary(monthPunches, hourlyPrice);
  return salary;
};

module.exports = {
  createEmployee,
  queryEmployees,
  getEmployeeById,
  getEmployeeSalaryByMonth,
};
