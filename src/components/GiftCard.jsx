/* name, image, rating input, Buy */
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Modal from "./formSteps/Result/Modal";

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

const GiftCard = ({ productData, setrelevancyData ,setIsOpenModal,setCurrModalData}) => {
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    productData = { ...productData, rating: rate };
    setrelevancyData(productData);
    console.log(productData);
    setRating(rate);
  };
  return (
    <div className="px-3 py-2 w-72  min-h-[28rem] rounded-md overflow-hidden shadow-lg bg-white flex flex-col justify-evenly">
      <GiftImage imageLink={productData.ImageLink}></GiftImage>
      <GiftName giftName={productData.Gift}></GiftName>
      <div className="w-full py-4 flex flex-col gap-2 justify-evenly  items-start">
        <RatingComponent
          rating={rating}
          handleRating={handleRating}
        ></RatingComponent>
      </div>
        <ExploreLink productData={productData} setIsOpenModal={setIsOpenModal} setCurrModalData={setCurrModalData} ></ExploreLink>
    </div>
  );
};

export default GiftCard;

const GiftImage = ({ imageLink }) => {
  return (
    <div className="w-full rounded-md">
      <img
        className="rounded-md mx-auto object-fill"
        src={imageLink}
        alt="gift_image"
      ></img>
    </div>
  );
};

const GiftName = ({ giftName }) => {
  return <div className="py-4 text-xl font-semibold min-h-[8rem]">{giftName}</div>;
};
const RatingComponent = ({ rating, handleRating }) => {
  return (
    <div className="w-full">
      <div className="font-medium">How helpful is this? </div>
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
        tooltipClassName={`bg-white text-dark text-xl font-semibold py-2`}
        emptyStyle={{ display: "flex" }}
        emptyClassName={`flex`}
        fillStyle={{ display: "-webkit-inline-box" }}
        fillClassName={`inline-box`}
      ></Rating>
    </div>
  );
};

const ExploreLink = ({ productData,setIsOpenModal,setCurrModalData }) => {
  console.log(productData);
  return (<a href={productData.Link} target="_blank" rel="noopener noreferrer" onClick={()=>{setIsOpenModal(true); setCurrModalData(productData)}}>
    <div className="w-full border font-semibold hover:border-white hover:bg-light bg-white text-light hover:text-white border-light  hover:cursor-pointer py-2 px-4 rounded-md text-center">
      
        Explore
     
    </div> </a>
  );
};
