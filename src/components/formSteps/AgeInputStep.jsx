import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";

const AgeInputStep = ({ nextStep }) => {
  const minLimit = 0;
  const maxLimit = 100;
  const { register, handleSubmit } = useForm();
  const generateRandomNumber = () =>
    Math.floor(Math.random() * maxLimit + minLimit);
  const [displayAgeInput, setDisplayAgeInput] = useState(false);
  const [age, setAge] = useState("45");
  const handleClick = () => {
    setDisplayAgeInput(true);
    clearInterval(interval);
  };
  const onSubmit = (event) => {
    if (event.age !== "" && event.age !== undefined && event.age !== null) {
      nextStep();
    } else {
      window.alert("Enter field first!");
    }
  };

  useEffect(() => {
    const interval = setInterval(
      () => setAge(generateRandomNumber().toString()),
      4000
    );
  }, []);

  return (
    <div className="flex  flex-col justify-center ">
      <h1 className=" font-bold text-2xl text-center ">Enter Recipient's Age</h1>
      {!displayAgeInput && (
        <div className="" onClick={handleClick}>
          <div className="border border-orange-300 p-4 rounded-md">
            <div className="border animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-4 text-5xl font-bold">
              {age}
            </div>
          </div>
        </div>
      )}

      {displayAgeInput && (
        <div className="flex-col">
          <form className=" " onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              min={2}
              max={100}
              className=" p-2 border border-orange-300 outline-none rounded-md text-3xl font-bold remove-arrows"
              {...register("age")}
            ></input>
            <div className="float-right">
              <Button className="p-4 font-bold " type="submit" text="Next">
                Next
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AgeInputStep;
