import React, { useContext, useState } from "react";
import AgeInputAnimation from "../AgeInput.Animation";
import { UserContext, UserDispatchContext } from "../Context";
import PrevNext from "../PrevNext";

const AgeInputStep = ({ nextStep }) => {
  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const { userDetails } = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const onSubmit = (event) => {
    if (event.age !== "" && event.age !== undefined && event.age !== null) {
      nextStep();
    } else {
      window.alert("Enter field first!");
    }
  };

  const handleAgeInputChange = (e) => {
    setUserDetails((userInfo) => (userInfo.age = e.target.value));
    console.log(userDetails);
  };

  return (
    <div className="h-full flex flex-col justify-between  ">
      <h1 className={`heading-style`}>Enter Recipient's Age</h1>
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
              // onChange={handleAgeInputChange}
            ></input>
          </div>
        )}
      </div>
      <PrevNext />
    </div>
  );
};

export default AgeInputStep;
