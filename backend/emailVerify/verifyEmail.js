import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const verifyEmail = async (token, email, otp) => {
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
      subject: "Verify Your Email",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Email Verification</h2>

          <p>Your verification code is:</p>

          <h1 style="color: blue;">${otp}</h1>

          <p>This OTP expires in 10 minutes.</p>

          <p>Or click the button below to verify your email:</p>

          <a href="http://localhost:5173/verify/${token}"
             style="
               display:inline-block;
               padding:10px 20px;
               background:#007bff;
               color:#fff;
               text-decoration:none;
               border-radius:5px;
             ">
            Verify Email
          </a>
        </div>
      `,
      text: `Hi,

Your OTP is: ${otp}

Verify your email using the following link:
http://localhost:5173/verify/${token}`,
    };

    const info = await transporter.sendMail(mailConfigurations);

    console.log("✅ Email Sent Successfully!");
    console.log(info.response);

    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return false;
  }
};
