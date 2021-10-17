import Express from "express";
import {
  getProducts,
  saveProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = Express.Router();

// Route get All Products
router.get("/", getProducts);
// Route get single Product
router.get("/:id");
// Route CREATE Product
router.post("/", saveProduct);
// Route UPDATE Product
router.patch("/:id", updateProduct);
// Route DELETE Product
router.delete("/");

export default router;
