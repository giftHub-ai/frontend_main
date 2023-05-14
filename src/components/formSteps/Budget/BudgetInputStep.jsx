import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "../Interest/InterestCard";
const InterestArray = [
  "200",
  "500",
  "1000",
  "2000",
  "5000",
  "10,000",
  "50,000",
  "Doesn't matters",
];
const BudgetInputStep = () => {
  const [selectedInterest, setInterest] = useState();
  const [activeInterest, setActiveInterest] = useState(null);
  const [alreadyFilled, setAlreadyFilled] = useState(false);

  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  const setSelectedInterest = (interest) => {
    inputDetails.userInput.budget = interest;
    setAlreadyFilled(true);
    console.log(inputDetails.userInput);
  };
  let interestValue;
  useEffect(() => {
    interestValue = inputDetails.userInput.budget;
    if (interestValue !== "") {
      setAlreadyFilled(true);
      setActiveInterest(InterestArray.indexOf(interestValue));
    }
  }, []);
  return (
    <div className="w-full px-4  flex flex-col justify-between h-full">
      <h1 className="w-full py-4 heading-style text-white">
        Pick your average budget(INR)
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
            Budgets were not found
          </div>
        )}
      </div>
      <PrevNext input={selectedInterest} alreadyFilled={alreadyFilled} />
    </div>
  );
};
export default BudgetInputStep;
