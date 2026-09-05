import { Outlet } from "react-router-dom";
import Header from "./Header";
import Bottom from "./Bottom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="w-full shrink-0">
        <Header />
      </header>

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <footer className="w-full shrink-0">
        <Bottom />
      </footer>
    </div>
  );
};

export default RootLayout;
