import Venta from "../models/Venta.js";
import Cliente from "../models/Cliente.js";
import DetalleVenta from "../models/DetalleVenta.js";
import Producto from "../models/Producto.js";

export const createVenta = async (req, res) => {
try {
    const { id_cliente, productos } = req.body;
    let total = 0;
    const detalles = [];

    for (const item of productos) {
    const producto = await Producto.findByPk(item.id_producto);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    if (producto.stock < item.cantidad) return res.status(400).json({ message: `Stock insuficiente para ${producto.nombre}` });

      const subtotal = producto.precio * item.cantidad;
    total += subtotal;
    detalles.push({
        id_producto: item.id_producto,
        cantidad: item.cantidad,
        precio_unitario: producto.precio,
        subtotal
    });

      // Actualizar stock
    await producto.update({ stock: producto.stock - item.cantidad });
    }

    const venta = await Venta.create({ id_cliente, total });
    for (const detalle of detalles) {
    await DetalleVenta.create({ ...detalle, id_venta: venta.id });
    }

    res.status(201).json({ venta, detalles });
} catch (error) {
    res.status(500).json({ message: 'Error al crear venta', error: error.message });
}
};

export const getVentas = async (req, res) => {
try {
    const ventas = await Venta.findAll({
    include: [
        { model: Cliente, attributes: ['nombre', 'email'] }
    ]
    });
    res.json(ventas);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener ventas' });
}
};

export const getVentaById = async (req, res) => {
try {
    const venta = await Venta.findByPk(req.params.id, {
    include: [
        { model: Cliente, attributes: ['nombre', 'email'] },
        { model: DetalleVenta, include: [{ model: Producto, attributes: ['nombre', 'precio'] }] }
    ]
    });
    if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
    res.json(venta);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener venta' });
}
};