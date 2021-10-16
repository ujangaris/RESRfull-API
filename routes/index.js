import Express from "express";

const router = Express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});
router.post("/", (req, res) => {
  res.send("Welcome POST");
});

export default router;
