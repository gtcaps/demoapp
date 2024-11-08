const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'demodb',
    'root',
    '1q2w3e4r5t', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;