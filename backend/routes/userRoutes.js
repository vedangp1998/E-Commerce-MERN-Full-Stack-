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
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { isAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verify);
router.post("/reverify", reVerify);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.get("/me", isAuthenticated, getCurrentUser);
router.post("/forgotpassword", forgotPassword);
router.post("/verifyotp/:email", verifyOtp);
router.post("/changepassword/:email", changePassword);

router.get("/alluser", isAuthenticated, isAdmin, allUser);
router.get("/getuserbyid/:userId", getUseById);
router.put("/update/:id", isAuthenticated, singleUpload, updateUser);

export default router;
