import React from "react";

const StepperPane = ({ className, stepNames, setActiveStep }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "border p-2";
    return `${defaultClassName} ${className} ${appClassName}`;
  };
  return (
    <div className={buildClassName(``)}>
      {stepNames.map((step, index) => (
        <Step
          key={index}
          stepName={step}
          index={index}
          setActiveStep={setActiveStep}
        ></Step>
      ))}
    </div>
  );
};

export default StepperPane;

const Step = ({ stepName, index, setActiveStep }) => {
  const handleClick = () => {
    setActiveStep(index + 1);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full p-2 mb-2 font-semibold text-gray-600 hover:bg-gray-100 bg-gray-200 rounded-2xl hover:cursor-pointer"
    >
      {stepName}
    </div>
  );
};
