import React, { useContext, useEffect, useState } from "react";
import AgeInputStep from "../formSteps/AgeInputStep";
import BudgetInputStep from "../formSteps/BudgetInputStep";
import GenderInputStep from "../formSteps/GenderInputStep";
import InterestInputStep from "../formSteps/InterestInputStep";
import OccasionInputStep from "../formSteps/OccasionInputStep";
import RelationshipInputStep from "../formSteps/RelationshipInputStep";
import { UserContext, UserDispatchContext } from "../Context";
const ActiveStepForm = ({
  className,
  stepNames,

}) => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const buildClassName = (appClassName) => {
    const defaultClassName = "p-2 ";
    return `${defaultClassName} ${className} ${appClassName}`;
  };
  const [stepNamesMap, setStepNamesMap] = useState(null);

  useEffect(() => {
    const stepNamesArray = stepNames.map((step, index) => [index + 1, step]);
    setStepNamesMap(new Map(stepNamesArray));
  }, []);

  if (stepNamesMap === undefined || stepNamesMap === null) {
    return (
      <ErrorComponent
        message={"stepNamesArray is undefined/null"}
      ></ErrorComponent>
    );
  } else {
    return (
      <div className={buildClassName(`lg:w-[65%] text-text  h-[80%]`)}>
        <StepToFormMapper
        
          stepNamesMap={stepNamesMap}
          activeStep={inputDetails.activeStep}
          nextStep={setUserDetails.nextStep}
          prevStep={setUserDetails.prevStep}
        ></StepToFormMapper>
      </div>
    );
  }
};

export default ActiveStepForm;

const ErrorComponent = ({ message }) => {
  return (
    <div className="w-full p-4 text-red-500 font-semibold text-lg">
      {message}
    </div>
  );
};

const StepToFormMapper = ({ stepNamesMap, activeStep, prevStep, nextStep }) => {
  switch (stepNamesMap.get(activeStep)) {
    // 1
    case "age_input_step":
      return <AgeInputStep nextStep={nextStep}></AgeInputStep>;
    // 2
    case "gender_input_step":
      return (
        <GenderInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></GenderInputStep>
      );
    // 3
    case "interest_input_step":
      return (
        <InterestInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></InterestInputStep>
      );
    // 4
    case "relationship_input_step":
      return (
        <RelationshipInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></RelationshipInputStep>
      );
    // 5
    case "occasion_input_step":
      return (
        <OccasionInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></OccasionInputStep>
      );
    // 6
    case "budget_input_step":
      return <BudgetInputStep prevStep={prevStep}></BudgetInputStep>;
    // 7
    default:
      return <ErrorComponent message={"default case reached"}></ErrorComponent>;
  }
};
