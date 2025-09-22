import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const DetalleVenta = sequelize.define("DetalleVenta", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_venta: { type: DataTypes.INTEGER, allowNull: false },
    id_producto: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precio_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    subtotal: { type: DataTypes.DECIMAL(10,2), allowNull: false }
}, {
    tableName: "detalle_ventas",
    timestamps: false
});

export default DetalleVenta;