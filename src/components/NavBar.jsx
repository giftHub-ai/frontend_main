import React, { useState } from "react";
import { Link } from "react-router-dom";
import giftLogo from "../assets/giftLogo1.png";
const navKeys = ["Home"];
const NavBar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  const buildClassName = (appClassName) => {
    const defaultClassName = "w-full";
    return `${defaultClassName} ${appClassName} ${className}`;
  };
  return (
    <div className={buildClassName(``)}>
      {/* for screen-width < sm */}
      {isMenuOpen ? (
        /* display nav menu if menu is open */
        <div className="sm:hidden w-full flex flex-row justify-between drop-shadow-none shadow-md">
          <div className={"py-4 px-8 flex flex-col items-start"}>
            <AppLogo></AppLogo>
            <NavOptions navKeys={navKeys}></NavOptions>
          </div>
          <CloseIcon
            className="py-4 px-8 flex items-start"
            handleMenuClick={handleMenuClick}
          ></CloseIcon>
        </div>
      ) : (
        /* display hamburger and login button if menu is not open */
        <div className="sm:hidden w-full flex items-center justify-between drop-shadow-none shadow-md">
          <MenuIcon
            className="m-4 p-2 hover:bg-background hover:bg-opacity-20 rounded-md"
            handleMenuClick={handleMenuClick}
          ></MenuIcon>
          <LoginButton buttonText={""}></LoginButton>
        </div>
      )}
      {/* for screen-width >= sm */}
      <div className="max-sm:hidden py-4 px-8 flex flex-col items-start sm:flex-row sm:justify-between sm:items-center drop-shadow-none shadow-background shadow-sm">
        <AppLogo></AppLogo>
        <div className="flex flex-row items-baseline">
          <NavOptions navKeys={navKeys}></NavOptions>
          <LoginButton buttonText={`Login`}></LoginButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const AppLogo = () => (
  <div className="hidden sm:flex flex-row items-center">
    <div className="hidden lg:block mx-2 text-2xl font-semibold text-dark">
      Gift Store
    </div>
    <img className="w-16 h-16" src={giftLogo} alt="giftLogo"></img>
  </div>
);

export const NavButton = ({ option }) => (
  <div className="px-4 py-2 mx-4 font-semibold hover:text-light hover:cursor-pointer transition ease-linear delay-200 text-center">
    <Link to="/">{option.toUpperCase()}</Link>
  </div>
);

const NavOptions = ({ navKeys }) => (
  <nav className="flex flex-col sm:flex-row">
    {navKeys &&
      navKeys.map((option, index) => (
        <NavButton key={index} option={option}></NavButton>
      ))}
  </nav>
);

const LoginButton = ({ buttonText }) => (
  <button className="text-light rounded-md px-4 mx-4 py-2 text-2xl font-semibold hover:text-dark hover:bg-background hover:bg-opacity-5 hover:border-white">
    <Link to="/login">{buttonText}</Link>
  </button>
);

const MenuIcon = ({ handleMenuClick, className }) => (
  <button onClick={handleMenuClick} className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
);

const CloseIcon = ({ handleMenuClick, className }) => (
  <button onClick={handleMenuClick} className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);
