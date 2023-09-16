import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "../Interest/InterestCard";
const maleArray = [
  "Anniversary",
  "Baby & Expecting",
  "Birthday",
  "Christmas",
  "Diwali",
  "Father's Day",
  "Friendship Day",
  "New Year's",
  "Any",
];
const femaleArray = [
  "Anniversary",
  "Baby & Expecting",
  "Birthday",
  "Christmas",
  "Diwali",
  "Friendship Day",
  "Mother's Day",
  "New Year's",
  "Raksha Bandhan",
  "Any",
];

const OccasionInputStep = () => {
  const [selectedInterest, setInterest] = useState();
  const [activeInterest, setActiveInterest] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const setSelectedInterest = (interest) => {
    inputDetails.userInput.occasion = interest;
    setAlreadyFilled(true);
    console.log(inputDetails.userInput);
  };
  const InterestArray =  inputDetails.userInput.gender=='Male'?maleArray:femaleArray;
  let interestValue;
  useEffect(() => {
    interestValue = inputDetails.userInput.occasion;
    console.log(interestValue);
    if (interestValue !== "") {
      setAlreadyFilled(true);
      setActiveInterest(InterestArray.indexOf(interestValue));
    }
  }, []);

  return (
    <div className="w-full px-4 flex flex-col justify-between h-full ">
      <h1 className="w-full py-4 heading-style text-white">
        Select the occasion for your purchase
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
            occasions were not found
          </div>
        )}
      </div>
      <PrevNext input={selectedInterest} alreadyFilled={alreadyFilled} />
    </div>
  );
};

export default OccasionInputStep;
