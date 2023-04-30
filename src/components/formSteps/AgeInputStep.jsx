import React, { useContext, useEffect, useState } from "react";
import PrevNext from "../PrevNext";
import AgeInputAnimation from "../AgeInput.Animation";
import { UserContext, UserDispatchContext } from "../Context";

const AgeInputStep = () => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
let ageValue;
  const [age, setAge] = useState(null);
  useEffect(() => {
    ageValue = inputDetails.userInput.age;
    if (ageValue === -1) ageValue = age;
  }, [age]);

  return (
    <div className="h-full flex flex-col justify-between  ">
      <h1 className={inputDetails.headingStyle}>Enter Recipient's Age</h1>
      <div className="flex   justify-center items-between">
        {!inputDetails.displayAgeInput && (
          <AgeInputAnimation
            setDisplayAgeInput={setUserDetails.setDisplayAgeInput}
          />
        )}

        {inputDetails.displayAgeInput && (
          <div className="flex-col">
            <input
              type="number"
              min={2}
              max={100}
              className=" p-2 border border-orange-300 outline-none rounded-md text-3xl font-bold remove-arrows"
              onChange={() => {
                setAge(event.target.value);
              }}
              value={ageValue}
            ></input>
          </div>
        )}
      </div>
      <PrevNext parameter="age" input={age} />
    </div>
  );
};

export default AgeInputStep;
