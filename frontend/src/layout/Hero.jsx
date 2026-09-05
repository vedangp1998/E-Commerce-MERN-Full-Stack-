import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-amber-950/10 bg-[#f3eadc] shadow-[0_25px_70px_-45px_rgba(63,38,24,0.8)]">
      {/* Background Decorations */}
      <div className="absolute -right-24 top-[-7rem] h-80 w-80 rounded-full bg-[#d9a86c]/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#b85d48]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-12 sm:px-10 lg:px-14 lg:pb-16 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl animate-rise-in">
            {/* Small Badge */}
            <div className="mb-7 inline-flex items-center gap-2 border-b border-[#a94f3d]/30 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a94f3d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a94f3d]" />
              <span>Curated goods for everyday rituals</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl font-heading text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#3e261b] sm:text-6xl lg:text-7xl">
              Objects with
              <span className="block italic text-[#a94f3d]">a little soul.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-[#604b3e] sm:text-lg">
              Thoughtfully selected pieces that make the ordinary feel considered. Discover a slower, warmer way to shop.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products">
                <Button
                  size="lg"
                  className="w-full bg-[#a94f3d] px-7 text-white shadow-lg shadow-[#a94f3d]/20 transition-all hover:-translate-y-0.5 hover:bg-[#873c2e] hover:shadow-xl sm:w-auto"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-[#b9947d] bg-transparent px-7 text-[#7e3c30] hover:bg-white/60 sm:w-auto"
                >
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Trust Features */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-amber-950/15 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <Truck className="h-5 w-5 text-pink-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Fast Delivery
                  </p>
                  <p className="text-xs text-gray-500">Quick & reliable</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <ShieldCheck className="h-5 w-5 text-pink-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure Payment
                  </p>
                  <p className="text-xs text-gray-500">100% protected</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Quality Products
                  </p>
                  <p className="text-xs text-gray-500">Carefully selected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg animate-drift lg:mt-2">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-[#6b3b2d]/15 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-[#dec4a8]">
                {/* Product Image */}
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1000&q=80"
                  alt="Shopping collection"
                  className="h-[340px] w-full object-cover saturate-[0.85] sm:h-[450px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/50 bg-[#fbf8f1]/90 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-pink-600">
                        Featured Collection
                      </p>

                      <h3 className="mt-1 text-lg font-bold text-gray-900">
                        Fresh Picks For You
                      </h3>
                    </div>

                    <Link
                      to="/products"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white transition-transform hover:scale-110"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Rating Card */}
            <div className="absolute -left-5 top-10 hidden rounded-2xl border border-pink-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                  <Star className="h-5 w-5 fill-pink-500 text-pink-500" />
                </div>

                <div>
                  <p className="font-bold text-gray-900">4.9/5</p>
                  <p className="text-xs text-gray-500">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Floating Discount Card */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-pink-600 px-5 py-4 text-white shadow-xl sm:block">
              <p className="text-xs font-medium text-pink-100">
                Special Offers
              </p>

              <p className="mt-1 text-xl font-bold">Up to 40% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
