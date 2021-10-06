const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

//USER REGISTRATION
router.route("/").post(registerUser);

//POST EMAIL AND PASSWORD AUTH
router.post("/login", authController);

//GET USER PROFILE (PRIVATE ROUTE)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
