import { Router } from "express";
import * as clienteController from "../controllers/cliente.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", auth, clienteController.getClientes);
router.get("/:id", auth, clienteController.getClienteById);
router.post("/", auth, clienteController.createCliente);
router.put("/:id", auth, clienteController.updateCliente);

export default router;