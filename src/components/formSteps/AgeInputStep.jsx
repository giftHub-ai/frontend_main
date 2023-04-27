import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AgeInputStep = () => {
  const minLimit = 10;
  const maxLimit = 50;
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
    console.log(event);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setAge(generateRandomNumber().toString()),
      4000
    );
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      {!displayAgeInput && (
        <div className="w-max" onClick={handleClick}>
          <div className="border border-orange-300 p-4 rounded-md">
            <div className="border animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-4 text-5xl font-bold">
              {age}
            </div>
          </div>
        </div>
      )}
      {displayAgeInput && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            min={10}
            max={50}
            className="w-max p-2 border border-orange-300 outline-none rounded-md text-5xl font-bold remove-arrows"
            {...register("age")}
          ></input>
        </form>
      )}
    </div>
  );
};

export default AgeInputStep;
