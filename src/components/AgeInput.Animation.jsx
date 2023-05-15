import React, { useEffect, useState } from "react";
const AgeInputAnimation = ({ setDisplayAgeInput }) => {
  const minLimit = 10;
  const maxLimit = 100;
  let interval = null;
  const generateRandomNumber = () =>
    Math.floor(Math.random() * (maxLimit - minLimit) + minLimit);
  useEffect(() => {
    interval = setInterval(
      () => setAge(generateRandomNumber().toString()),
      3000
    );
  }, []);
  const [age, setAge] = useState("45");
  const handleClick = () => {
    setDisplayAgeInput(true);
    clearInterval(interval);
  };

  return (
    <div className="" onClick={handleClick}>
      <div className="border p-2 px-8 rounded-md">
        <div className="border-r pr-2 animate-typing overflow-hidden whitespace-nowrap border-r-12 border-r-black  text-3xl font-bold">
          {age}
        </div>
      </div>
    </div>
  );
};

export default AgeInputAnimation;
