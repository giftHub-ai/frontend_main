import React from "react";

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
  {
    giftName: "Candle Set",
    giftId: "GFT24680",
    status: "pending",
    sentDate: "2023-08-28",
  },
  {
    giftName: "Book: 'The Great Adventure'",
    giftId: "GFT11111",
    status: "accepted",
    sentDate: "2023-07-20",
  },
  {
    giftName: "Perfume",
    giftId: "GFT99999",
    status: "pending",
    sentDate: "2023-06-12",
  },
  {
    giftName: "Sweater",
    giftId: "GFT77777",
    status: "accepted",
    sentDate: "2023-05-05",
  },
  {
    giftName: "Jewelry Box",
    giftId: "GFT55555",
    status: "rejected",
    sentDate: "2023-04-17",
  },
  {
    giftName: "Tech Gadgets",
    giftId: "GFT33333",
    status: "accepted",
    sentDate: "2023-03-22",
  },
  {
    giftName: "Art Supplies",
    giftId: "GFT22222",
    status: "rejected",
    sentDate: "2023-02-10",
  },
  {
    giftName: "Coffee Maker",
    giftId: "GFT44444",
    status: "pending",
    sentDate: "2023-01-05",
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

export default function SentGifts() {
  return (
    <div className="w-full px-4">
      <h2 className="p-4 mb-4 text-2xl tracking-wide font-bold text-center ">
        Sent Gifts
      </h2>
      <div className="w-full mx-auto max-w-3xl">
        {sentGifts.map((gift, index) => {
          return <GiftCard key={index} {...gift}></GiftCard>;
        })}
      </div>
    </div>
  );
}

function GiftCard({ giftName, giftId, sentDate, status }) {
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
    let defaultClassName = "font-semibold ";
    if (status == "accepted") defaultClassName += "text-green";
    else if (status == "rejected") defaultClassName += "text-red";
    if (status == "pending") defaultClassName += "text-orange";
    return defaultClassName;
  };

  return (
    <div className="w-full p-4 my-2 rounded-md flex flex-col bg-interestHover">
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="font-bold hover:underline hover:cursor-pointer">
          {giftName}
        </h3>
        <p className="text-xs">{formatDate(sentDate)}</p>
      </div>
      <div className="w-full">
        Status: <span className={buildStatusClassName(status)}>{status}</span>
      </div>
    </div>
  );
}
