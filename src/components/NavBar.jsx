import React, { useState } from "react";

const navKeys = ["Home", "About", "Tiger", "Elephant"];

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
        <div className="sm:hidden w-full flex flex-row justify-between">
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
        <div className="sm:hidden w-full flex justify-between">
          <MenuIcon
            className="m-4 p-2 border border-background rounded-sm"
            handleMenuClick={handleMenuClick}
          ></MenuIcon>
          <LoginButton buttonText={`Login`}></LoginButton>
        </div>
      )}
      {/* for screen-width >= sm */}
      <div className="max-sm:hidden py-4 px-8 flex flex-col items-start sm:flex-row sm:justify-between sm:items-baseline">
        <AppLogo></AppLogo>
        <NavOptions navKeys={navKeys}></NavOptions>
        <LoginButton buttonText={`Login`}></LoginButton>
      </div>
    </div>
  );
};

export default NavBar;

const AppLogo = () => <div className="hidden md:block"></div>;

const NavButton = ({ option }) => (
  <div className="px-4 py-2 mx-4 font-semibold border-2 border-white hover:border-b-background hover:text-light hover:cursor-pointer">
    {option}
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
  <button className="px-4 mx-4 py-2 text-3xl font-semibold text-background hover:text-dark">
    {buttonText}
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
