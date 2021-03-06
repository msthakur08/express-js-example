export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('user', [{
            roleId: 1,
            firstName: 'MS',
            lastName: 'Thakur',
            email: 'nodejs@example.com',
            salt: 'MXKQ1MneqKPIuvx7yHAejIsj8usHgi0xLEvZqxlt22ROfE+BnL3rLhjwHxaGARkMKbsXjhvyzsmDi8gJ9j4lnHCS8B5974zf+Ico7ZX7FlRbCWxHfLYXdRkmDjdaBk3To+7kUowgKhPpx3Jxdna4a62Y7Z/Foggefzdf4OsLXQs=',
            password: '858fae79da63c22ad28fd25a91d69fb9a238ec91', // Test@1234
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('user', null, {
            truncate: true,
            cascade: true,
            restartIdentity: true
        });
    }
};
