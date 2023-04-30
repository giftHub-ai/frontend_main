import React, { useState } from "react";
import ActiveStepForm from "./ActiveStepForm";
import StepperPane from "./StepperPane";

const stepNames = [
  "age_input_step",
  "gender_input_step",
  "interest_input_step",
  "relationship_input_step",
  "occasion_input_step",
  "budget_input_step",
];
const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);
  return (
    <div className="border border-red-400 w-full flex">
      <StepperPane
        className={`w-max`}
        stepNames={stepNames}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      ></StepperPane>
      <ActiveStepForm
        className={`w-max`}
        stepNames={stepNames}
        activeStep={activeStep}
        nextStep={nextStep}
        prevStep={prevStep}
      ></ActiveStepForm>
    </div>
  );
};

export default MultiStepForm;
