const dayjs = require('dayjs');
const { chunk, sum } = require('lodash');

/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const getWorkedHours = (punches) => {
  const punchesByDay = [];
  punches.forEach((punch) => {
    punchesByDay[dayjs(punch.createdAt).format('YYYY-MM-DD')].push(punch);
  });
  const hoursByDay = punchesByDay.map((day) => {
    const pairOfPunches = chunk(day, 2);
    const totalHours = pairOfPunches.map((punch) =>
      punch.length !== 2 ? 0 : dayjs(punch[0].createdAt).diff(punch[1].createdAt, 'hour')
    );
    return sum(totalHours);
  });
  return sum(hoursByDay);
};

module.exports = { getWorkedHours };
