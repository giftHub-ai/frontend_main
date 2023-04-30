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

  return (
    <div className="w-[80vw] mx-auto  flex items-center h-screen gap-x-8 z-90">
      <StepperPane

        stepNames={stepNames}

      ></StepperPane>
      <ActiveStepForm
    
        stepNames={stepNames}
      ></ActiveStepForm>
    </div>
  );
};

export default MultiStepForm;
