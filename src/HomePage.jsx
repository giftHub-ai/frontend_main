import React, { useState } from "react";
import homeBackground from "./assets/HomePageBG/8307.jpg";
import { UserProvider } from "./components/Context";
import NavBar from "./components/NavBar";
import MultiStepForm from "./components/form/MultiStepForm";
const HomePage = ({ className }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "";
    return `${defaultClassName} ${appClassName} ${className}`;
  };
  const [formDisplay, setFormDisplay] = useState(false);
  return (
    <div className={buildClassName(``)}>
      <NavBar className="w-full"></NavBar>
      {!formDisplay ? (
        <PageContent setFormDisplay={setFormDisplay}></PageContent>
      ) : (
        <div className="w-screen min-h-screen overflow-y-scroll flex items-center justify-center font-sans border bg-[url('/images/banner1.webp')]">
          <UserProvider>
            <MultiStepForm></MultiStepForm>
          </UserProvider>
          {/* <img
        src={maleGift}
        className="hidden lg:block absolute right-0 top-24"
      ></img>*/}
          {/* <img src={girlGift} className="absolute left-0 top-16 "></img>  */}
        </div>
      )}
    </div>
  );
};

export default HomePage;

const StartButton = ({ setFormDisplay }) => {
  return (
    <button
      className="my-4 text-2xl font-semibold py-2 px-6 border border-light bg-light text-white rounded-md hover:text-light hover:bg-white"
      onClick={() => setFormDisplay(true)}
    >
      Start
    </button>
  );
};

const PageContent = ({ setFormDisplay }) => {
  return (
    <main className="mx-4 flex flex-col-reverse md:grid md:grid-cols-2">
      <div className="m-4 flex flex-col items-start justify-center md:pl-16">
        <div className="font-bold text-3xl md:text-5xl py-4 flex flex-col ">
          <span>Gift</span>
          <span>Recommendation</span>
          <span>System</span>
          <span>by Customer Segmentation</span>
        </div>
        <div className="w-full text-md">
         An advanced recommendation system by customer segmentation using Machine Learning
        </div>
        <StartButton setFormDisplay={setFormDisplay}></StartButton>
      </div>
      <div className="">
        <img src={homeBackground}></img>
      </div>
    </main>
  );
};
