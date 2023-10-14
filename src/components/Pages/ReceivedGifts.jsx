import React from "react";

const receivedGifts = [
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    receivedDate: "2023-10-01",
    senderName: "Alice",
  },
  {
    giftName: "Chocolates",
    giftId: "GFT67890",
    receivedDate: "2023-09-15",
    senderName: "Bob",
  },
  {
    giftName: "Candle Set",
    giftId: "GFT24680",
    receivedDate: "2023-08-28",
    senderName: "Charlie",
  },
  {
    giftName: "Book: 'The Great Adventure'",
    giftId: "GFT11111",
    receivedDate: "2023-07-20",
    senderName: "David",
  },
  {
    giftName: "Perfume",
    giftId: "GFT99999",
    receivedDate: "2023-06-12",
    senderName: "Eva",
  },
  {
    giftName: "Sweater",
    giftId: "GFT77777",
    receivedDate: "2023-05-05",
    senderName: "Frank",
  },
  {
    giftName: "Jewelry Box",
    giftId: "GFT55555",
    receivedDate: "2023-04-17",
    senderName: "Grace",
  },
  {
    giftName: "Tech Gadgets",
    giftId: "GFT33333",
    receivedDate: "2023-03-22",
    senderName: "Hank",
  },
  {
    giftName: "Art Supplies",
    giftId: "GFT22222",
    receivedDate: "2023-02-10",
    senderName: "Ivy",
  },
  {
    giftName: "Coffee Maker",
    giftId: "GFT44444",
    receivedDate: "2023-01-05",
    senderName: "Jack",
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

export default function ReceivedGifts() {
  return (
    <div className="w-full px-4">
      <h2 className="p-4 mb-4 text-2xl tracking-wide font-bold text-center ">
        Received Gifts
      </h2>
      <div className="w-full mx-auto max-w-3xl">
        {receivedGifts.map((gift, index) => {
          return <GiftCard key={index} {...gift}></GiftCard>;
        })}
      </div>
    </div>
  );
}

function GiftCard({ giftName, giftId, receivedDate, senderName }) {
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
  /* const handleAccept = () => {} */
  /* const handleReject = () => {} */
  return (
    <div className="w-full p-4 my-2 rounded-md flex flex-col bg-interestHover">
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="font-bold hover:underline hover:cursor-pointer">
          {giftName}
        </h3>
        <p className="text-xs">{formatDate(receivedDate)}</p>
      </div>
      <div className="w-full">
        Sender: <span className="font-semibold">{senderName}</span>
      </div>
      <div className="mt-4 flex flex-row items-center justify-around">
        <button className="px-2 py-1 text-sm tracking-wider border-2 border-green hover:bg-green hover:text-white">
          <span className="pr-2">✓</span>Accept
        </button>
        <button className="px-2 py-1 text-sm tracking-wider border-2 border-light hover:bg-light hover:text-white">
          <span className="pr-2">✕</span>Reject
        </button>
      </div>
    </div>
  );
}
