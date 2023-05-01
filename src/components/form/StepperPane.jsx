import React, { useContext } from "react";
import { UserContext, UserDispatchContext } from "../Context";

const StepperPane = ({ className, stepNames }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "";
    return `${defaultClassName} ${className} ${appClassName}`;
  };
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  return (
    <div className={buildClassName(`hidden lg:block`)}>
      {stepNames.map((step, index) => (
        <Step
          key={index}
          stepName={step}
          index={index}
          activeStep={inputDetails.activeStep}
          setActiveStep={setUserDetails.setActiveStep}
        ></Step>
      ))}
    </div>
  );
};

export default StepperPane;

const Step = ({ stepName, index, activeStep, setActiveStep }) => {
  const buildClassName = (className) => {
    const defaultClassName =
      "w-full p-2 font-semibold rounded-lg hover:cursor-pointer ";
    let activeClassName = "";
    if (activeStep === index + 1) {
      activeClassName = "bg-light text-gray-100 hover:bg-gray-700";
    } else {
      activeClassName = "text-gray-600 hover:bg-gray-100 bg-gray-200";
    }

    return `${defaultClassName} ${activeClassName} ${className}`;
  };
  const handleClick = () => {
    setActiveStep(index + 1);
  };
  return (
    <div className="my-8 mx-4">
      <div
        onClick={handleClick}
        className={buildClassName(`flex items-center justify-between`)}
      >
        {index + 1} {stepName}
        <span className="flex items-center justify-center w-4 h-4 bg-white rounded-full ring-4 ring-green">
          <img src="./DoneTick.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
