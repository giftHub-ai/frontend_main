/* name, image, rating input, Buy */
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import giftImage from "../assets/ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg";

const tooltipArray = [
  "0.5",
  "1.0",
  "1.5",
  "2.0",
  "2.5",
  "3.0",
  "3.5",
  "4.0",
  "4.5",
  "5.0",
];
const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045",
];

const GiftCard = () => {
  const [rating, setRating] = useState(0);
  useEffect(() => console.log(rating), [rating]);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
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
        <div className="rounded-md mr-1">
          <Rating
            onClick={handleRating}
            initialValue={rating}
            tooltipArray={tooltipArray}
            fillColorArray={fillColorArray}
            size={30}
            transition
            allowFraction
            showTooltip={true}
            className={``}
            tooltipDefaultText={`0.0`}
            tooltipClassName={`bg-white text-dark text-xl font-semibold py-2 px-3`}
            emptyStyle={{ display: "flex" }}
            emptyClassName={`flex`}
            fillStyle={{ display: "-webkit-inline-box" }}
            fillClassName={`inline-box`}
          ></Rating>
        </div>
        <div className="border font-semibold hover:border-white hover:bg-light bg-white text-light hover:text-white border-light  hover:cursor-pointer py-2 px-4 rounded-md">
          Buy
        </div>
      </div>
    </div>
  );
};

export default GiftCard;

const RatingComponent = ({ rating, setRating }) => {
  return (
    <div className="rating_bar">
      <span
        className={`rate_1 ${rating <= 5 ? `!text-yellowStar` : ``}`}
        onClick={() => setRating(5)}
      ></span>
      <span
        className={`rate_2 ${rating <= 4 ? `!text-yellowStar` : ``}`}
        onClick={() => setRating(4)}
      ></span>
      <span
        className={`rate_3 ${rating <= 3 ? `!text-yellowStar` : ``}`}
        onClick={() => setRating(3)}
      ></span>
      <span
        className={`rate_4 ${rating <= 2 ? `!text-yellowStar` : ``}`}
        onClick={() => setRating(2)}
      ></span>
      <span
        className={`rate_5 ${rating <= 1 ? `!text-yellowStar` : ``}`}
        onClick={() => setRating(1)}
      ></span>
    </div>
  );
};