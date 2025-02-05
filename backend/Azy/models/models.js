import { Sequelize } from "sequelize";
import db from "../config/config.js";

const { DataTypes } = Sequelize;
export const Datas = db.define('data',{
    img :DataTypes.STRING,
    name:DataTypes.STRING,
    harga : DataTypes.STRING

},
{
    freezeTableName: true
});


export const User = db.define('form',{
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    nama :{type:DataTypes.STRING,allowNull: false},
    password :{type:DataTypes.STRING,
        allowNull: false}

},
{freezeTableName: true});

(async () => {
    try {
        await db.sync({ alter: true }); // Menyesuaikan tabel jika ada perubahan
        console.log("Database synchronized successfully");
    } catch (error) {
        console.error("Failed to synchronize database:", error);
    }
})();