import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Logo from "../assets/logo.png";

const Bottom = () => {
  return (
    <footer className="border-t border-amber-950/10 bg-[#f3eadc] text-[#604b3e]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Shop Logo"
                className="h-16 w-16 object-contain transition-transform duration-300 hover:rotate-[-5deg] hover:scale-105"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#856f62]">
              A considered collection of useful, beautiful things for the everyday.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="rounded-lg border border-amber-950/10 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#a94f3d] hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="rounded-lg border border-amber-950/10 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#a94f3d] hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-lg border border-amber-950/10 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-[#a94f3d] hover:text-white"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-[#3e261b]">Shop</h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-pink-600">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-pink-600"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="transition-colors hover:text-pink-600"
                >
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-pink-600"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-[#3e261b]">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-pink-600"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="transition-colors hover:text-pink-600"
                >
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="transition-colors hover:text-pink-600"
                >
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition-colors hover:text-pink-600"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-pink-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-[#3e261b]">
              Stay Connected
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Subscribe to our newsletter for new products, offers, and
              exclusive deals.
            </p>

            {/* Newsletter */}
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 rounded-l-lg border border-pink-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="flex items-center justify-center rounded-r-lg bg-pink-600 px-4 text-white transition-colors hover:bg-pink-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            {/* Contact */}
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-pink-600" />
                <span>support@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-pink-600" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-pink-600" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-amber-950/10 bg-[#e9dbc8]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Your Store. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link to="/terms" className="transition-colors hover:text-pink-600">
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className="transition-colors hover:text-pink-600"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
