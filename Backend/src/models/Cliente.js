import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Cliente = sequelize.define("Cliente", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(150), unique: true },
    telefono: { type: DataTypes.STRING(20) },
    direccion: { type: DataTypes.STRING(200) },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: "clientes",
    timestamps: false
});

export default Cliente;