import React, {useState,useEffect} from "react";
const AgeInputAnimation = ({setDisplayAgeInput}) => {
  const minLimit = 0;
  const maxLimit = 100;
let interval=null;
  const generateRandomNumber = () =>
    Math.floor(Math.random() * maxLimit + minLimit);
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
        <div className="border-r pr-4 animate-typing overflow-hidden whitespace-nowrap border-r-12 border-r-black  text-3xl font-bold">
          {age}
        </div>
      </div>
    </div>
  );
};

export default AgeInputAnimation;
