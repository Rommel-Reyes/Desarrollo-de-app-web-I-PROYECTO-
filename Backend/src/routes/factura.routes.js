import { Router } from "express";
import * as facturaController from "../controllers/factura.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:idVenta", auth, facturaController.getFacturaByVenta);

export default router;