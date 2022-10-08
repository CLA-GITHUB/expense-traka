import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { state, toggle } = React.useContext(ThemeContext);
  return (
    <div className='flex justify-between items-center'>
      <p className='text-2xl font-semibold dark:text-white'>{title}</p>
      {state && state.dark ? (
        <RiSunFill
          className='text-2xl dark:text-white'
          onClick={() => toggle()}
        />
      ) : (
        <RiMoonFill
          className='text-2xl dark:text-white'
          onClick={() => toggle()}
        />
      )}
    </div>
  );
};
export default Header;
