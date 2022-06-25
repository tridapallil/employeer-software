const { Schema, model } = require('mongoose');

const punchSchema = Schema(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Punch
 */
const Punch = model('Punch', punchSchema);

module.exports = Punch;
