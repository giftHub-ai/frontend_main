import React, { useContext, useEffect, useState } from "react";
import PrevNext from "../PrevNext";
import AgeInputAnimation from "../AgeInput.Animation";
import { UserContext, UserDispatchContext } from "../Context";

const AgeInputStep = () => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  let ageValue;
  const [age, setAge] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  useEffect(() => {
    ageValue = inputDetails.userInput.age;
    if (ageValue !== -1) {setAlreadyFilled(true);
}

  }, []);

  const handleChange = (event) => {

    let curage= event.target.value;
    setAge(curage);
    
    inputDetails.userInput.age =curage;
  
  };

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
                handleChange(event);
              }}
              defaultValue={ageValue}
            ></input>
          </div>
        )}
     
      </div>
      {alreadyFilled && (
          <div className="text-center">
            <h2>Current Age Input value: {inputDetails.userInput.age}</h2>
          </div>
        )}  
      <PrevNext  input={age} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default AgeInputStep;
