/* name, image, rating input, Buy */
import React from "react";
import giftImage from "../assets/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg";

const GiftCard = () => {
  return (
    <div className="p-2 m-2 max-w-sm rounded overflow-hidden shadow-lg">
      {/* image */}
      <div className="w-full rounded-md">
        <img className="rounded-md" src={giftImage} alt="gift_image"></img>
      </div>
      {/* name */}
      <div className="py-4 text-xl font-semibold">Gift Name</div>
      {/* rating and buy button */}
      <div className="w-full flex flex-row items-center justify-between">
        <div className="rounded-md">
          {/* rating component here */}
          <RatingComponent></RatingComponent>
        </div>
        <div className="border font-semibold hover:border-white hover:bg-light bg-white text-light hover:text-white border-light  hover:cursor-pointer py-2 px-4 rounded-md">
          Buy
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

const RatingComponent = () => {
  return (
    <div className="rating_bar">
      <span className="rate_1"></span>
      <span className="rate_2"></span>
      <span className="rate_3"></span>
      <span className="rate_4"></span>
      <span className="rate_5"></span>
    </div>
  );
};

{
  /* <div class="hover:cursor-pointer w-[100px] h-[100px] my-[4px] mx[175px] inline rtl">
      <span className="before:content-['\2605'] before:text-light before:w-[100px] before:h-[100px] before:hover:cursor-pointer before:text-[3rem] hover:before"></span>
      <span className="before:content-['\2605'] before:text-light before:w-[100px] before:h-[100px] before:hover:cursor-pointer before:text-[3rem] hover:before"></span>
      <span className="before:content-['\2605'] before:text-light before:w-[100px] before:h-[100px] before:hover:cursor-pointer before:text-[3rem] hover:before"></span>
      <span className="before:content-['\2605'] before:text-light before:w-[100px] before:h-[100px] before:hover:cursor-pointer before:text-[3rem] hover:before"></span>
      <span className="before:content-['\2605'] before:text-light before:w-[100px] before:h-[100px] before:hover:cursor-pointer before:text-[3rem] hover:before"></span>
    </div> */
}
{
  /* <span className="hover:cursor-pointer">☆</span> */
}
