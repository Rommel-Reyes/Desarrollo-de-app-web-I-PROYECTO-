import Cliente from "../models/Cliente.js";

export const getClientes = async (req, res) => {
try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes' });
}
};

export const getClienteById = async (req, res) => {
try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.json(cliente);
} catch (error) {
    res.status(500).json({ message: 'Error al obtener cliente' });
}
};

export const createCliente = async (req, res) => {
try {
    const nuevoCliente = await Cliente.create(req.body);
    res.status(201).json(nuevoCliente);
} catch (error) {
    res.status(500).json({ message: 'Error al crear cliente' });
}
};

export const updateCliente = async (req, res) => {
try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
    await cliente.update(req.body);
    res.json(cliente);
} catch (error) {
    res.status(500).json({ message: 'Error al actualizar cliente', error: error.message });
}
};