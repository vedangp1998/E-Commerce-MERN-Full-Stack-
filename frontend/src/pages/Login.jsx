import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Signup response:", res.data);

      if (res.data.success) {
        toast.success(res.data.message || "Login Successfully!");
        dispatch(setUser(res.data.user));
        localStorage.setItem("accessToken", res.data.accessToken);

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 200);
      } else {
        toast.error(res.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);

      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-7rem)] items-center justify-center overflow-hidden rounded-[2rem] bg-[#f3eadc] px-4 py-12">
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#d9a86c]/25 blur-3xl" />
      <Card className="relative w-full max-w-sm border-amber-950/10 bg-[#fbf8f1]/95 shadow-2xl shadow-[#6b3b2d]/10">
        <CardHeader>
          <CardTitle>Login to Your Account</CardTitle>

          <CardDescription>
            Enter given details below to login your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="vedang.prajapati18@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="enter your password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pr-10"
                />

                {showPassword ? (
                  <Eye
                    onClick={() => setShowPassword(false)}
                    className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-700"
                  />
                ) : (
                  <EyeOff
                    onClick={() => setShowPassword(true)}
                    className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-700"
                  />
                )}
              </div>
            </div>

            {/* Button + Login */}
            <CardFooter className="flex-col gap-3 px-0 pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#a94f3d] hover:bg-[#873c2e]"
              >
                {loading ? (
                  <>
                    {" "}
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    "Login..."
                  </>
                ) : (
                  "Login"
                )}
              </Button>

              <p className="text-sm text-gray-700">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer text-pink-800 hover:underline"
                >
                  Signup
                </Link>
              </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
