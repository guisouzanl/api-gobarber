module.exports = {
  up: queryInterface => {
    return queryInterface.dropTable('appointment');
  },

  down: queryInterface => {
    return queryInterface.dropTable('appointment');
  },
};
