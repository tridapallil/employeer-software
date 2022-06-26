const { Schema, model } = require('mongoose');
const Punch = require('./punch.model');
const { contractsTypes } = require('../config/contracts');
const ContractorEmployee = require('./contractorEmployee.model');

const employeeSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    contractType: {
      type: String,
      required: true,
      enum: [contractsTypes.CONTRACT, contractsTypes.FULL_TIME, contractsTypes.PART_TIME],
      trim: true,
    },
    hourlyPrice: {
      type: Number,
      required: true,
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const employeeType = {
  contractor: ContractorEmployee,
};

employeeSchema.methods.getMonthPunches = async function (month) {
  return Punch.find({ employeeId: this._id, $expr: { $eq: [{ $month: '$createdAt' }, month] } });
};

employeeSchema.methods.getHourlyAditionalPrice = async function () {
  return employeeType[this.contractType].getAditionalPrice(this);
};

/**
 * @typedef Employee
 */

const Employee = model('Employee', employeeSchema);

module.exports = Employee;
