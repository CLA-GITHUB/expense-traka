import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <p className='text-2xl font-semibold'>{title}</p>;
};
export default Header;
