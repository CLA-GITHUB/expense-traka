import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-open_sans max-w-screen bg-gray-100'>{children}</div>
  );
};
export default Layout;
