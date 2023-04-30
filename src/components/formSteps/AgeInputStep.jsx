import React, {useContext, useState } from "react";
import PrevNext from "../PrevNext";
import AgeInputAnimation from "../AgeInput.Animation";
import { UserContext, UserDispatchContext } from "../Context";

const AgeInputStep = ({ nextStep }) => {
  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const onSubmit = (event) => {
    if (event.age !== "" && event.age !== undefined && event.age !== null) {
      nextStep();
    } else {
      window.alert("Enter field first!");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between  ">
      <h1 className={inputDetails.headingStyle}>
        Enter Recipient's Age
      </h1>
      <div className="flex   justify-center items-between">
        {!displayAgeInput && (
          <AgeInputAnimation setDisplayAgeInput={setDisplayAgeInput} />
        )}

        {displayAgeInput && (
          <div className="flex-col">
            
              <input
                type="number"
                min={2}
                max={100}
                className=" p-2 border border-orange-300 outline-none rounded-md text-3xl font-bold remove-arrows"

              ></input>
          
          </div>
        )}
      </div>
      <PrevNext />
    </div>
  );
};

export default AgeInputStep;
