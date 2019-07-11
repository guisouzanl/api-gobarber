module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'provider', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
