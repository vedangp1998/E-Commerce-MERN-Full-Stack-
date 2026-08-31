import express from "express";
import {
  register,
  verify,
  reVerify,
  login,
  logout,
  forgotPassword,
  verifyOtp,
  changePassword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verify);
router.post("/reverify", reVerify);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.post("/forgotpassword", forgotPassword);
router.post("/verifyotp/:email", verifyOtp);
router.post("/changepassword/:email", changePassword);

export default router;
