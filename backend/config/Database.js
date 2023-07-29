import { Sequelize } from "sequelize"

const db = new Sequelize('mern_paginate', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db