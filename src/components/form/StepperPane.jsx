import React from "react";

const StepperPane = ({ className, stepNames, activeStep, setActiveStep }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "border w-max p-2";
    return `${defaultClassName} ${className} ${appClassName}`;
  };
  return (
    <div className={buildClassName(``)}>
      {stepNames.map((step, index) => (
        <Step
          key={index}
          stepName={step}
          index={index}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        ></Step>
      ))}
    </div>
  );
};

export default StepperPane;

const Step = ({ stepName, index, activeStep, setActiveStep }) => {
  const buildClassName = (className) => {
    const defaultClassName =
      "w-full p-2 mb-2 font-semibold rounded-2xl hover:cursor-pointer";
    let activeClassName = "";
    if (activeStep === index + 1) {
      activeClassName = "bg-black text-gray-100 hover:bg-gray-700";
    } else {
      activeClassName = "text-gray-600 hover:bg-gray-100 bg-gray-200";
    }

    return `${defaultClassName} ${activeClassName} ${className}`;
  };
  const handleClick = () => {
    setActiveStep(index + 1);
  };
  return (
    <div onClick={handleClick} className={buildClassName(``)}>
      {stepName}
    </div>
  );
};
