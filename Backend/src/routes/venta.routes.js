import { Router } from "express";
import * as ventaController from "../controllers/venta.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", auth, ventaController.createVenta);
router.get("/", auth, ventaController.getVentas);
router.get("/:id", auth, ventaController.getVentaById);

export default router;