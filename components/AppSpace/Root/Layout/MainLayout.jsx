import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="min-w-screen min-h-screen relative">
        <Navbar />
        <div className="w-full h-full">{children}</div>
        <div className="w-full ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
