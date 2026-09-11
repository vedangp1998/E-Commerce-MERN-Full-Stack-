import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const logoutHandler = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (res.data.success) {
        dispatch(setUser(null));
        localStorage.removeItem("accessToken");
        toast.success(res.data.message);
        console.log("Logout Successfully");
      }
    } catch (error) {
      localStorage.removeItem("accessToken");
      dispatch(setUser(null));
      console.log(error);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-amber-950/10 bg-[#fbf8f1]/90 shadow-[0_12px_35px_-24px_rgba(63,38,24,0.6)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center transition-transform duration-200 hover:scale-105"
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-16 object-contain sm:h-18 sm:w-18"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-7">
          <ul className="hidden items-center gap-6 text-base font-medium text-gray-700 md:flex">
            <li>
              <Link
                to="/"
                className="relative transition-colors duration-200 hover:text-pink-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="relative transition-colors duration-200 hover:text-pink-600"
              >
                Products
              </Link>
            </li>

            {user && (
              <li>
                <Link
                  to={`/profile/${user._id}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-pink-600"
                >
                  <User className="h-4 w-4" />
                  <span>Hello, {user.firstName}</span>
                </Link>
              </li>
            )}
          </ul>

          {/* Cart */}
          <Link
            to="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-pink-100"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700 transition-colors group-hover:text-pink-600" />

            {/* Cart Badge */}
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-semibold text-white">
              0
            </span>
          </Link>

          {/* Auth Button */}
          {user ? (
            <Button
              variant="outline"
              className="hidden items-center gap-2 border-pink-300 text-pink-600 hover:bg-pink-600 hover:text-white sm:flex"
              onClick={logoutHandler}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="bg-pink-600 text-white hover:bg-pink-500">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-amber-950/10 bg-[#f5efe4] md:hidden">
        <div className="flex items-center justify-center gap-8 px-4 py-2 text-sm font-medium text-gray-700">
          <Link to="/" className="transition-colors hover:text-pink-600">
            Home
          </Link>

          <Link
            to="/products"
            className="transition-colors hover:text-pink-600"
          >
            Products
          </Link>

          {user && (
            <Link
              to="/profile"
              className="transition-colors hover:text-pink-600"
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
