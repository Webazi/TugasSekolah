import { Sequelize, DataTypes } from "sequelize";
import db from "/workspaces/TugasSekolah/backend/Azy/config/config.js";


export const Datas = db.define('data',{
    img :DataTypes.STRING,
    name:DataTypes.STRING,
    harga : DataTypes.STRING

},
{freezeTableName: true});


export const User = db.define('form',{
    email :DataTypes.STRING,
    nama :DataTypes.STRING,
    password :DataTypes.STRING

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