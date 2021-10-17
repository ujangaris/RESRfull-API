import Express from "express";
import { getProducts } from "../controllers/productController.js";

const router = Express.Router();

router.get("/", getProducts);
router.post("/", (req, res) => {
  res.send("Welcome POST");
});

export default router;
