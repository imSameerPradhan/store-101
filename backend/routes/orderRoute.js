const express = require("express");
const {
  addOrderItem,
  getOrderById,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//CREATE NEW ORDER
router.route("/").post(protect, addOrderItem);

//getOrderById
router.route("/:id").get(protect, getOrderById);

module.exports = router;
