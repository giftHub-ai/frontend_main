import React from "react";
import ActiveStepForm from "./ActiveStepForm";

const stepNames = [
  "Age",
  "Gender",
  "Interest",
  "Relationship",
  "Occasion",
  "Budget",
];
const MultiStepForm = () => {
  return (
    <div className="border w-full mt-20 mx-2 sm:mx-4 md:mx-8 lg:mx-32 flex z-90">
      {/* <StepperPane className={"lg:w-4/12"} stepNames={stepNames}></StepperPane> */}
      <ActiveStepForm
        className={"w-full"}
        stepNames={stepNames}
      ></ActiveStepForm>
    </div>
  );
};

export default MultiStepForm;
