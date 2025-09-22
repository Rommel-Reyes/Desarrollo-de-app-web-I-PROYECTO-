import Factura from "../models/Factura.js";
import Venta from "../models/Venta.js";
import Cliente from "../models/Cliente.js";
import DetalleVenta from "../models/DetalleVenta.js";
import Producto from "../models/Producto.js";

export const getFacturaByVenta = async (req, res) => {
try {
    const idVenta = req.params.idVenta;
    const factura = await Factura.findOne({
    where: { id_venta: idVenta },
    include: [
        {
        model: Venta,
        include: [
            { model: Cliente, attributes: ['nombre', 'email', 'telefono', 'direccion'] },
            {
            model: DetalleVenta,
            include: [{ model: Producto, attributes: ['nombre', 'precio'] }]
            }
        ]
        }
    ]
    });

    if (!factura) return res.status(404).json({ message: 'Factura no encontrada' });

    res.json(factura);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener factura', error: error.message });
}
};