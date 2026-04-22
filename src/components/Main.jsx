import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "../pages/footer";

export default function Main() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-24 bg-[#060b17] min-h-screen text-white">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
