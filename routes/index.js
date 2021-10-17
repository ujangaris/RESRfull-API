import Express from "express";
import {
  getProducts,
  saveProduct,
  updateProduct,
  getProductsById,
  deleteProduct,
} from "../controllers/productController.js";

const router = Express.Router();

// Route get All Products
router.get("/", getProducts);
// Route get single Product
router.get("/:id", getProductsById);
// Route CREATE Product
router.post("/", saveProduct);
// Route UPDATE Product
router.patch("/:id", updateProduct);
// Route DELETE Product
router.delete("/:id", deleteProduct);

export default router;
