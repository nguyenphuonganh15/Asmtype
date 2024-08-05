import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "@/components/Top";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Top />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
