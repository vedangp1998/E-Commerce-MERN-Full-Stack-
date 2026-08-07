import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import { verifyEmail } from "../emailVerify/verifyEmail.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are Required",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User Already Exist!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      otp,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });

    verifyEmail(token, email, otp);
    newUser.token = token;
    await newUser.save();

    return res.status(201).json({
      success: true,
      message:
        "User Registered Successfully. Please check your email for the verification code.",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verify = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Auth token is missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "Regestration Token Expired !",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Token Verification Failed !",
      });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }

    user.token = null;
    user.isVerified = true;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email Verified Successfully !",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
