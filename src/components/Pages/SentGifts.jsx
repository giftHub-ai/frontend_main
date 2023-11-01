import React from "react";
import _ from "underscore";

/**
 * giftName
 * giftId
 * status
 * sentDate
 */

const sentGifts = [
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    status: "accepted",
    sentDate: "2023-10-01",
  },
  {
    giftName: "Chocolates",
    giftId: "GFT67890",
    status: "rejected",
    sentDate: "2023-09-15",
  },
];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SentGifts({ sentGifts }) {
  // console.log(sentGifts);
  return (
    <div className="max-w-3xl mx-auto px-4 py-2 bg-interestHover my-4">
      <div className="text-3xl font-semibold text-center">Sent Gifts</div>
      <div className="w-full mx-auto max-w-3xl">
        {sentGifts.length > 0 ? (
          sentGifts.map((gift, index) => {
            return <GiftCard key={index} {...gift}></GiftCard>;
          })
        ) : (
          <div className="text-xl text-center font-semibold my-4">
            No Gifts Sent Yet!
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}

function GiftCard({ giftName, giftId, createdAt, Status }) {
  const formatDate = (date) => {
    const inputDate = new Date(date);

    const formattedDate =
      inputDate.getDate() +
      " " +
      monthNames[inputDate.getMonth()] +
      ", " +
      inputDate.getFullYear();

    return formattedDate;
  };

  const buildStatusClassName = (status) => {
    if(_.isEmpty(status)){
      status = "ordered";
    }
    
    status = status.toLowerCase();
    let defaultClassName = "font-semibold ";
    if (status == "accepted") defaultClassName += "text-green";
    else if (status == "rejected") defaultClassName += "text-red";
    if (status == "pending") defaultClassName += "text-orange";
    return defaultClassName;
  };

  return (
    <div className="w-full p-4 my-2 rounded-md flex flex-col bg-white">
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="font-bold hover:underline hover:cursor-pointer">
          {giftName}
        </h3>
        <p className="text-xs">{formatDate(createdAt)}</p>
      </div>
      <div className="w-full">
        Status: <span className={buildStatusClassName(Status)}>{Status}</span>
      </div>
    </div>
  );
}
