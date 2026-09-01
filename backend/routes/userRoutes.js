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
  allUser,
  getUseById,
} from "../controllers/userController.js";
import { isAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verify);
router.post("/reverify", reVerify);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.post("/forgotpassword", forgotPassword);
router.post("/verifyotp/:email", verifyOtp);
router.post("/changepassword/:email", changePassword);

router.get("/alluser", isAuthenticated, isAdmin, allUser);
router.get("/getuserbyid/:userId", getUseById);

export default router;
