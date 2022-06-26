const ContractorEmployee = {
  async getAditionalPrice(employee) {
    return employee.hourlyPrice * 0.2;
  },
};

module.exports = ContractorEmployee;
