import Producto from "../models/Producto.js";

export const getProductos = async (req, res) => {
try {
    const productos = await Producto.findAll();
    res.json(productos);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
}
};

export const getProductoById = async (req, res) => {
try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(producto);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener producto' });
}
};

export const createProducto = async (req, res) => {
try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
} catch (error) {
    res.status(500).json({ message: 'Error al crear producto' });
}
};

export const updateProducto = async (req, res) => {
try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    await producto.update(req.body);
    res.json(producto);
} catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto' });
}
};

export const deleteProducto = async (req, res) => {
try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    await producto.destroy();
    res.json({ message: 'Producto eliminado' });
} catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto' });
}
};