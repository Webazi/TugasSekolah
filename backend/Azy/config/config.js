import { Sequelize } from "sequelize";

const db = new Sequelize ('Azy','root','Aji190227*',{
    host: 'localhost',
    dialect:"mysql"
});

export default db;