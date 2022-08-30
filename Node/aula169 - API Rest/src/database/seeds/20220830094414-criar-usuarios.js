const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John Doe',
        email: 'luiz@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Marcia',
        email: 'marcia@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Mariana',
        email: 'mariana@email.com',
        password_hash: await bcryptjs.hash('12345', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => { },
};
