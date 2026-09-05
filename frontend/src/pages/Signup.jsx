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
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log("Signup data:", formData);

      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Signup response:", res.data);

      if (res.data.success) {
        toast.success(res.data.message || "Account created successfully!");

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });

        // Navigate to verification page
        setTimeout(() => {
          navigate("/verify");
        }, 800);
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
    <div className="flex min-h-screen items-center justify-center bg-pink-100 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create Your Account</CardTitle>

          <CardDescription>
            Enter given details below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            {/* First Name */}
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>

              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Vedang"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>

              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Prajapati"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
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
                  placeholder="Create a Password"
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
                className="w-full bg-pink-600 hover:bg-pink-500"
              >
                {loading ? "Creating Account..." : "Signup"}
              </Button>

              <p className="text-sm text-gray-700">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-pink-800 hover:underline"
                >
                  Login
                </Link>
              </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
