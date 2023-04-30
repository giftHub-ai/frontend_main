import React, { useContext } from "react";
import Button from "./Button";
import { UserContext, UserDispatchContext } from "./Context";

const PrevNext = ({ parameter,input }) => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const checkNext = (input) => {
    if (input !== "" && input !== undefined && input !== null) {
      console.log(input);
      inputDetails.userInput.age=input;
      console.log(inputDetails.userInput);
      setUserDetails.nextStep();
    } else {
      window.alert("Enter field first!");
    }
  };
  return (
    <div className="flex justify-between">
      <div
        className={`items-start ${
          inputDetails.activeStep == 1 ? "invisible" : null
        }`}
        onClick={() => {
          setUserDetails.prevStep();
        }}
      >
        <Button className="p-4 font-bold " text="Prev " />
      </div>
      <div
        className="items-start "
        onClick={() => {
          checkNext(input);
        }}
      >
        <Button className="p-4 font-bold " text="Next " />
      </div>
    </div>
  );
};

export default PrevNext;
