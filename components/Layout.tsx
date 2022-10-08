import React from "react";
import { ThemeContext } from "../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    state: { dark },
  } = React.useContext(ThemeContext);
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div
        className={`${
          dark ? "dark" : ""
        } font-open_sans max-w-screen bg-gray-100 dark:bg-[#182747]`}
      >
        {children}
      </div>
    </div>
  );
};
export default Layout;
