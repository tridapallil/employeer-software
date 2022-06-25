const { Punch } = require('../models');

/**
 * Create a punch
 * @param {Object} punchBody
 * @returns {Promise<Punch>}
 */
const createPunch = async (punchBody) => {
  return Punch.create(punchBody);
};

/**
 * Get punch by id
 * @param {ObjectId} id
 * @returns {Promise<Punch>}
 */
const getPunchById = async (id) => {
  return Punch.findById(id);
};

module.exports = {
  createPunch,
  getPunchById,
};
