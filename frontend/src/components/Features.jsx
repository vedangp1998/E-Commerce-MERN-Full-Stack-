import { Headphones, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free shipping",
    description: "On every order over $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment",
    description: "Protected from cart to door",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description: "A real person is always here",
  },
  {
    icon: RefreshCcw,
    title: "Easy returns",
    description: "30 days to change your mind",
  },
];

const Features = () => {
  return (
    <section
      aria-label="Shopping benefits"
      className="mt-8 overflow-hidden rounded-2xl border border-amber-950/10 bg-[#fbf8f1]/80 shadow-[0_18px_50px_-38px_rgba(63,38,24,0.65)] backdrop-blur-sm"
    >
      <div className="grid divide-y divide-amber-950/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className="group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#f3eadc] sm:px-6 lg:px-5"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ead6b8] text-[#a94f3d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-5deg]">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold leading-tight text-[#3e261b]">
                {title}
              </h2>
              <p className="mt-1 text-xs leading-5 text-[#856f62]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
