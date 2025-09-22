import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, sequelize } from "./config/db.js";
import "./models/index.js";
import authRoutes from "./routes/auth.routes.js";
import productoRoutes from "./routes/pro.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import facturaRoutes from "./routes/factura.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
sequelize.sync({ alter: true })
    .then(() => console.log("Tablas sincronizadas con Sequelize"))
    .catch(err => console.error(" Error sync:", err));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/facturas", facturaRoutes);

// Ruta de prueba
app.get("/", (req, res) => res.send("API En linea"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
