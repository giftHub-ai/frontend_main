import React from "react";

const InterestCard = ({
  setInterest,
  setActiveInterest,
  selectedInterest,
  active,
  interest,
  index,
}) => {
  const buildInterestBoxClassName = (className, isActive) => {
    const defaultClassName =
      "h-28  font-semibold text-md sm:text-xl text-light drop-shadow-md shadow-sm flex flex-col items-center justify-center flex-wrap border-2 border-light rounded-lg hover:border-white hover:cursor-pointer hover:bg-light hover:text-white";
    const activeClassName = isActive
      ? "bg-dark hover:bg-light text-white"
      : "bg-white hover:bg-interestHover";
    return `${defaultClassName} ${className} ${activeClassName}`;
  };

  return (
    <div
      onClick={() => {
        setInterest(interest);
        setActiveInterest(index);
      }}
      key={index}
      className={buildInterestBoxClassName("", active)}
    >
      {interest}
    </div>
  );
};

export default InterestCard;
