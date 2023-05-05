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
      "h-[100px] font-semibold text-md drop-shadow-md shadow-sm flex justify-center items-center border-2 border-white rounded-lg hover:cursor-pointer hover:bg-light hover:text-white   ";
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
