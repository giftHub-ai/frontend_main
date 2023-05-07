import React, { useContext, useEffect, useState } from "react";
import AgeInputAnimation from "../../AgeInput.Animation";
import { UserContext, UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import Toast from "../../Toast";
import toast from "react-hot-toast";

const AgeInputStep = () => {
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [age, setAge] = useState(null);
  const [prevAgeValue, setPrevAgeValue] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  
  useEffect(() => {
    let ageVal = inputDetails.userInput.age;

    if (ageVal !== -1) {
      setAlreadyFilled(true);
      setPrevAgeValue(inputDetails.userInput.age);
    }
    else{
      setPrevAgeValue();
    }

  }, []);

  const handleChange = (event) => {
    let curage = event.target.value;
    if(curage<0 || curage>130)
        {
          toast.error("Age Input is not correct!", {
            duration: 2000,
            position: "top-right",
          });
         
          return;
        }
    setAge(curage);
    inputDetails.userInput.age = curage;
  };

  return (
    <div className="w-full px-4 backdrop-blur-sm flex flex-col justify-between h-full">
       <Toast />
      <h1 className={`heading-style`}>Enter Recipient's Age</h1>
      <div className="flex justify-center items-between">
        {!inputDetails.displayAgeInput && (
          <AgeInputAnimation
            setDisplayAgeInput={setUserDetails.setDisplayAgeInput}
          />
        )}

        {inputDetails.displayAgeInput && (
          <div className="flex-col">
            <input
              type="number"
              min="2"
              max="150"
              className=" p-2 pr-4 border border-orange-300 outline-none rounded-md text-3xl font-bold remove-arrows"
              onChange={() => {
                handleChange(event);
              }}
             
              value={prevAgeValue}
            ></input>
          </div>
        )}
      </div>
      {/* {alreadyFilled && (
        <div className="text-center text-[1.5rem]">
          <h2>Your current Age Input value: {inputDetails.userInput.age}</h2>
        </div>
      )} */}
      <PrevNext input={age} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default AgeInputStep;
