import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [status, setStatus] = useState("Verifying...");


  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("❌ Verification token is missing");
        return;
      }
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/user/verify",
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        );
        if (res.data.success) {
          setStatus("✅ Email Verification Successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setStatus(
            res.data.message || "❌ Verification Failed. Please Try Again.",
          );
        }
      } catch (error) {
        console.error("Email verification error:", error);
        setStatus(
          error.response?.data?.message ||
            "❌ Verification Failed. Please Try Again.",
        );
      }
    };
    verifyEmail();
  }, [token, navigate]);

  
  return (
    <div className="relative flex min-h-[calc(100vh-7rem)] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-[#f3eadc] px-4 py-12">
      {" "}
      <div className="w-full max-w-md rounded-2xl border border-amber-950/10 bg-[#fbf8f1] p-8 text-center shadow-2xl shadow-[#6b3b2d]/10">
        {" "}
        <h2 className="text-xl font-semibold text-gray-800"> {status} </h2>{" "}
      </div>{" "}
    </div>
  );
};
export default VerifyEmail;
