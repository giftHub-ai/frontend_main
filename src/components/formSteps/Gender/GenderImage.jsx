import React from "react";

const GenderImage = ({ className, gender, imageGender, src, handleClick }) => {
  const buildClassName = (appClassName) => {
    const defaultClassName = "";
    return `${defaultClassName} ${appClassName} ${className}`;
  };
  return (
    <div
      className={buildClassName(
        `gender-img-style ${gender === imageGender ? "bg-white" : ""}`
      )}
      onClick={() => handleClick(imageGender)}
    >
      <img className="rounded-full" src={src} alt={imageGender}></img>
    </div>
  );
};

export default GenderImage;
