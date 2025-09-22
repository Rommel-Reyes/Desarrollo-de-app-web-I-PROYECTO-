import { Router } from "express";
import * as productoController from "../controllers/pro.controller.js";
import auth from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", auth, productoController.getProductos);
router.get("/:id", auth, productoController.getProductoById);
router.post("/", auth, productoController.createProducto);
router.put("/:id", auth, productoController.updateProducto);
router.delete("/:id", auth, productoController.deleteProducto);

export default router;