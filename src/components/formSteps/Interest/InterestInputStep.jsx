import React, { useEffect, useState } from "react";
import { UserContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "./InterestCard";
const InterestArray = [
  // "Art",
  // "Writing",
  // "Reading",
  "Fashion",
  "Travel",
  "Sports",
  "Health",
  "Music",
  "Technology",
  "Movies",
  "Food",
  "Any",
];
const InterestInputStep = () => {
  const [selectedInterest, setInterest] = useState(undefined);
  const [activeInterest, setActiveInterest] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);
  const inputDetails = React.useContext(UserContext);

  const setSelectedInterest = (interest) => {
    inputDetails.userInput.interest = interest;
    setAlreadyFilled(true);
    console.log(inputDetails.userInput);
  };

  let interestValue;
  useEffect(() => {
    interestValue = inputDetails.userInput.interest;
    console.log("interest value", interestValue);
    if (interestValue !== "") {
      setAlreadyFilled(true);
      setActiveInterest(InterestArray.indexOf(interestValue));
    }
  }, []);

  return (
    <div className="w-full px-4  flex flex-col justify-between h-full ">
      <h1 className="w-full py-4 heading-style text-white">
        Pick Recipient's Interests
      </h1>
      <div className="w-full py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {InterestArray && InterestArray.length ? (
          InterestArray.map((interest, index) => {
            return (
              <InterestCard
                key={index}
                setInterest={setSelectedInterest}
                setActiveInterest={setActiveInterest}
                active={activeInterest === index}
                interest={interest}
                index={index}
                selectedInterest={selectedInterest}
              ></InterestCard>
            );
          })
        ) : (
          <div className="w-full text-center font-semibold p-4 text-xl">
            interests were not found
          </div>
        )}
      </div>
      <PrevNext input={selectedInterest} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default InterestInputStep;
