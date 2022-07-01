const allRoles = {
  user: ['getUsers', 'manageUsers', 'getEmployees', 'manageEmployees'],
  admin: ['getUsers', 'manageUsers', 'getEmployees', 'manageEmployees'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
