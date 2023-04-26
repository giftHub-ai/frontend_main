import React from "react";
import MultiStep from "react-multistep";
import Step from "../components/Step";

const MultiStepForm = () => {
  return (
    <div className="text-black" >
      <MultiStep showNavigation={true} stepCustomStyle={{color:"red", fontFamily:"sans-serif",}} >
        <Step title="Age" />
        <Step title="Gender" />
        <Step title="Interest" />
        <Step title="StepFour" />
      </MultiStep>
    </div>
  );
};

export default MultiStepForm;
