import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer (Fixed at Bottom) */}
      <Footer />
    </div>
  );
};

export default Layout;