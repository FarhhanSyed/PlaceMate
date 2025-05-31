// components/Layout.jsx
import React from "react";
import Background from "./Background";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
