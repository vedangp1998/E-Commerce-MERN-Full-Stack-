import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendOtpMail = async (email, otp) => {
  if (!email || !otp) {
    console.error("❌ Email and OTP are required to send mail.");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailConfigurations = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Reset Your Password",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Password Reset Request</h2>

          <p>Your verification code is:</p>

          <h1 style="color: blue;">${String(otp)}</h1>

          <p>This OTP expires in 10 minutes.</p>
        </div>
      `,
      text: `Hi,\n\nYour OTP is: ${String(otp)}\n\nThis OTP expires in 10 minutes.`,
    };

    const info = await transporter.sendMail(mailConfigurations);

    console.log("✅ OTP Sent Successfully!");
    console.log(info.response);

    return true;
  } catch (error) {
    console.error("❌ Error sending OTP email:", error);
    return false;
  }
};
