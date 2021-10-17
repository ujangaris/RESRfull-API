import Express from "express";
import { getProducts, saveProduct } from "../controllers/productController.js";

const router = Express.Router();

// Route get All Products
router.get("/", getProducts);
// Route CREATE Product
router.post("/", saveProduct);

export default router;
