import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Factura = sequelize.define("Factura", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_venta: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    datos_veterinaria: { type: DataTypes.STRING(200), defaultValue: 'Veterinaria XYZ, Tel: 1234-5678' },
    total: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
    tableName: "facturas",
    timestamps: false
});

export default Factura;