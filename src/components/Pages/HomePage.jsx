import React, { useState } from "react";
import homeBackground from "../../assets/HomePageBG/8307.jpg";
import NavBar from "../NavBar";
import MultiStepForm from "../form/MultiStepForm";
const HomePage = ({ className }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "";
    return `${defaultClassName} ${appClassName} ${className}`;
  };
  const [formDisplay, setFormDisplay] = useState(false);
  return (
    <div className={buildClassName(``)}>
      {!formDisplay ? (
        <>
          <NavBar className="w-full"></NavBar>
          <PageContent setFormDisplay={setFormDisplay}></PageContent>
        </>
      ) : (
        <div className="w-screen min-h-screen overflow-y-scroll flex items-center justify-center font-sans bg-formBg bg-bgWave bg-no-repeat bg-contain">
          {/* <UserProvider> */}
          <MultiStepForm></MultiStepForm>
        </div>
      )}
    </div>
  );
};

export default HomePage;

export const StartButton = ({ setFormDisplay }) => {
  return (
    <button
      className="my-4 text-2xl font-semibold py-2 px-6 border border-light bg-light text-white rounded-md hover:text-light hover:bg-white"
      onClick={() => setFormDisplay(true)}
    >
      Start/Send Gift
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
          <span>using Customer Segmentation</span>
        </div>
        <div className="w-full text-md">
          Tired of giving traditional gifts? Try new e-gifts, gift-cards to
          share with loved ones.
        </div>
        <StartButton setFormDisplay={setFormDisplay}></StartButton>
      </div>
      <div className="">
        <img src={homeBackground}></img>
      </div>
    </main>
  );
};
