import React, { useContext } from "react";
import Button from "./Button";
import { UserContext, UserDispatchContext } from "./Context";

const PrevNext = () => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  return (
    <div className="flex justify-between">
      
      <div
        className={`items-start ${inputDetails.activeStep==1?"invisible":null}`}
                onClick={() => {
          setUserDetails.prevStep();
        }}
      >
        <Button className="p-4 font-bold "  text="Prev " />
      </div>
      <div
        className="items-start "
        onClick={() => {
          setUserDetails.nextStep();
        }}
      >
        <Button className="p-4 font-bold "  text="Next " />
      </div>
    </div>
  );
};

export default PrevNext;
