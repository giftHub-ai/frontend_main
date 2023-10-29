import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import giftLogo from "../assets/giftLogo1.png";
import _ from "underscore";
const navKeys = ["Home"];
const NavBar = ({ className, showLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);
  const navigate = useNavigate();
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
            <AppLogo navigate={navigate}></AppLogo>
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
          {_.isEmpty(localStorage.getItem("token")) ? (
            <LoginButton buttonText={`Login/Receive Gift`}></LoginButton>
          ) : (
            <div className="text-light text-xl flex gap-x-8 items-center ">
              <div
                className="border-2 p-1 px-2 rounded-lg cursor-pointer hover:bg-dark hover:text-white transition-all hover:border-white"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard{"   "}
              </div>
              <div className="border-2 p-1 px-2 rounded-lg cursor-pointer hover:bg-dark hover:text-white transition-all " onClick={()=>{localStorage.removeItem("token")}}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const AppLogo = ({navigate}) => (
  <Link to="/" className="hidden sm:flex flex-row items-center cursor-pointer" >
    <div className="hidden lg:block mx-2 text-2xl font-semibold text-dark">
      GiftHub.ai
    </div>
    <img className="w-16 h-16" src={giftLogo} alt="giftLogo"></img>
  </Link>
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
