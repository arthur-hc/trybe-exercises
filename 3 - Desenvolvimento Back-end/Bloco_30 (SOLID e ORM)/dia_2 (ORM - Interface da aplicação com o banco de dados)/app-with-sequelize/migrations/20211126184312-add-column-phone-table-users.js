'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // AQUI FOI ADICIONA O COMANDO P/ CRIAR A COLUNA
    await queryInterface.addColumn('Users', 'phone_num', {
      type: Sequelize.STRING,
    });
    //
  },

  down: async (queryInterface, Sequelize) => {
    // AQUI FOI ADICIONA O COMANDO P/ REMOVER A COLUNA
    await queryInterface.removeColumn('Users', 'phone_num');
    //
  }
};
