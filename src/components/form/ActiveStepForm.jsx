import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserDispatchContext } from "../Context";
import AgeInputStep from "../formSteps/Age/AgeInputStep";
import BudgetInputStep from "../formSteps/Budget/BudgetInputStep";
import GenderInputStep from "../formSteps/Gender/GenderInputStep";
import InterestInputStep from "../formSteps/Interest/InterestInputStep";
import OccasionInputStep from "../formSteps/Occasion/OccasionInputStep";
import RelationshipInputStep from "../formSteps/Relationship/RelationshipInputStep";
const ActiveStepForm = ({ className, stepNames }) => {
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
      <div className={buildClassName(``)}>
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
    case "Age":
      return <AgeInputStep nextStep={nextStep}></AgeInputStep>;
    // 2
    case "Gender":
      return (
        <GenderInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></GenderInputStep>
      );
    // 3
    case "Interest":
      return (
        <InterestInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></InterestInputStep>
      );
    // 4
    case "Relationship":
      return (
        <RelationshipInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></RelationshipInputStep>
      );
    // 5
    case "Occasion":
      return (
        <OccasionInputStep
          nextStep={nextStep}
          prevStep={prevStep}
        ></OccasionInputStep>
      );
    // 6
    case "Budget":
      return <BudgetInputStep prevStep={prevStep}></BudgetInputStep>;
    // 7
    default:
      return <ErrorComponent message={"default case reached"}></ErrorComponent>;
  }
};
