import React from "react";

const RecipientGiftCard = ({ gift }) => {
  const { giftImage, giftLink, giftName, name } = gift;
  return (
    <div className="py-2 px-4 flex flex-col justify-center text-sm shadow-md rounded-md">
      {/* gift image */}
      <div className="py-2">
        <img
          src={giftImage}
          alt="gift_image"
          className="mx-auto object-fit"
        ></img>
      </div>
      {/* sender name */}
      <div className="pb-2 flex flex-row items-baseline">
        <div className="font-semibold ">Sender:</div>
        <div className="pl-2 ">{name}</div>
      </div>
      {/* gift name */}
      <div className="pb-2 flex flex-row items-baseline ">
        <div className="font-semibold ">Gift Name:</div>
        <div className="pl-2 ">{giftName}</div>
      </div>
      {/* gift link */}
      <div className="pb-2 flex flex-row items-baseline">
        <div className="font-semibold ">Reedem Link:</div>
        <a
          href={giftLink}
          target="_blank"
          className=" pl-2 text-light hover:underline"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default RecipientGiftCard;
