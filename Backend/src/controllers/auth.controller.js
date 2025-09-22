import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
try {
    const { nombre, email, password, rol } = req.body;
    const existe = await Usuario.findOne({ where: { email } });
    if (existe) return res.status(400).json({ msg: "El usuario ya existe" });

    const password_hash = await bcrypt.hash(password, 10);
    const usuario = await Usuario.create({ nombre, email, password_hash, rol });
    res.status(201).json({ msg: "Usuario registrado", usuario });
} catch (error) {
    res.status(500).json({ msg: "Error al registrar usuario", error: error.message });
}
};

export const login = async (req, res) => {
try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });

    const valido = await bcrypt.compare(password, usuario.password_hash);
    if (!valido) return res.status(401).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign({ id: usuario.id, email: usuario.email, rol: usuario.rol }, JWT_SECRET, { expiresIn: "8h" });
    res.json({ token });
} catch (error) {
    res.status(500).json({ msg: "Error al iniciar sesión", error: error.message });
}
};

export const profile = async (req, res) => {
try {
    const usuario = await Usuario.findByPk(req.user.id, { attributes: { exclude: ["password_hash"] } });
    if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" });
    res.json(usuario);
} catch (error) {
    res.status(500).json({ msg: "Error al obtener perfil", error: error.message });
}
};
