import React from "react";
import homeBackground from "./assets/HomePageBG/8307.jpg";
import NavBar from "./components/NavBar";
const HomePage = ({ className }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "";
    return `${defaultClassName} ${appClassName} ${className}`;
  };
  return (
    <div className={buildClassName(``)}>
      <NavBar className="w-full"></NavBar>
      <PageContent></PageContent>
    </div>
  );
};

export default HomePage;

const StartButton = () => {
  return (
    <button className="my-4 text-2xl font-semibold py-2 px-6 border border-light bg-light text-white rounded-md hover:text-light hover:bg-white">
      Start
    </button>
  );
};

const PageContent = () => {
  return (
    <main className="mx-4 flex flex-col-reverse md:grid md:grid-cols-2">
      <div className="m-4 flex flex-col items-start justify-center md:pl-16">
        <div className="font-bold text-3xl md:text-4xl py-4 flex flex-col">
          <span>Gift</span>
          <span>Recommendation</span>
          <span>System</span>
        </div>
        <div className="w-full text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </div>
        <StartButton></StartButton>
      </div>
      <div className="">
        <img src={homeBackground}></img>
      </div>
    </main>
  );
};
