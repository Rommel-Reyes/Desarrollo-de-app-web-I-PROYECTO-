import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Usuario = sequelize.define("Usuario", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(150), unique: true, allowNull: false },
    password_hash: { type: DataTypes.STRING(255), allowNull: false },
    rol: { type: DataTypes.ENUM('admin', 'vendedor', 'cliente'), defaultValue: 'vendedor' },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: "usuarios",
    timestamps: false
});

export default Usuario;