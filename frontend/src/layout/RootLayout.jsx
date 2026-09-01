import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "react-day-picker";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full shrink-0">
        <Header />
      </header>

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>

      <footer className="w-full shrink-0">
        <Footer />
        Footer
      </footer>
    </div>
  );
};

export default RootLayout;
