import React, { useContext, useState } from "react";
import { UserContext, UserDispatchContext } from "../../Context";
import PrevNext from "../../PrevNext";
import InterestCard from "./InterestCard";
const interest = [
  " Art",
  "Writing",
  "Beauty",
  "Photography",
  "Travel",
  "Sports",
  "Reading",
  "Music",
  " Yoga",
  "Technology",
  " Dance",
  " Movies",
];
const InterestInputStep = () => {
  const [selectedInterest, setInterest] = useState([]);
  const inputDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [activeInterest, setActiveInterest] = useState(null);

  return (
    <div className="border w-full px-4">
      <h1 className="w-full py-4 heading-style">Pick Recipient's Interests</h1>
      <div className="w-full py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {interest && interest.length ? (
          interest.map((interest, index) => {
            return (
              <InterestCard
                key={index}
                setInterest={setInterest}
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
      <PrevNext />
    </div>
  );
};

export default InterestInputStep;

{
  /* <div
                onClick={() => {
                  setInterest([...selectedInterest, item]);
                  setActiveInterest(index);
                }}
                key={index}
                className={buildInterestBoxClassName(
                  "",
                  activeInterest === index
                )}
              >
                {item}
              </div> */
}
