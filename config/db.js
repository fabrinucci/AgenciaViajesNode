import Sequelize from 'sequelize';

require('dotenv').config({ path: 'variables.env' })

const db = new Sequelize('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquiere: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;

// require('dotenv').config({ path: 'variables.env' })

// const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
//     host: process.env.BD_HOST,
//     port: process.env.BD_PORT,
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         acquiere: 30000,
//         idle: 10000
//     },
//     operatorAliases: false
// });

// export default db;