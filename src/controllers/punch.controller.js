const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { punchService } = require('../services');

const createPunch = catchAsync(async (req, res) => {
  const punch = await punchService.createPunch({ ...req.body, employeeId: req.params.employeeId });
  res.status(httpStatus.CREATED).send(punch);
});

const getPunch = catchAsync(async (req, res) => {
  const punch = await punchService.getPunchById(req.params.punchId);
  if (!punch) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Punch not found');
  }
  res.send(punch);
});

module.exports = {
  createPunch,
  getPunch,
};
