import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Venta = sequelize.define("Venta", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_cliente: { type: DataTypes.INTEGER, allowNull: true }, // Puede ser null por ON DELETE SET NULL
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
    tableName: "ventas",
    timestamps: false
});

export default Venta;
