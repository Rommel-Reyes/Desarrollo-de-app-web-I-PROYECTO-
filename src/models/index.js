import Cliente from "./Cliente.js";
import Producto from "./Producto.js";
import Venta from "./Venta.js";
import DetalleVenta from "./DetalleVenta.js";
import Factura from "./Factura.js";
import Usuario from "./Usuario.js";

// Relaciones
Cliente.hasMany(Venta, { foreignKey: "id_cliente" });
Venta.belongsTo(Cliente, { foreignKey: "id_cliente" });

Venta.hasMany(DetalleVenta, { foreignKey: "id_venta" });
DetalleVenta.belongsTo(Venta, { foreignKey: "id_venta" });

Producto.hasMany(DetalleVenta, { foreignKey: "id_producto" });
DetalleVenta.belongsTo(Producto, { foreignKey: "id_producto" });

Venta.hasOne(Factura, { foreignKey: "id_venta" });
Factura.belongsTo(Venta, { foreignKey: "id_venta" });

export { Cliente, Producto, Venta, DetalleVenta, Factura, Usuario };