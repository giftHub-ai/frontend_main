import React from "react";

const receivedGifts = [
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    receivedDate: "2023-10-01",
    senderName: "Alice",
    status: "ordered",
  },
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    receivedDate: "2023-10-01",
    senderName: "Alice",
    status: "Accepted",
  },
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    receivedDate: "2023-10-01",
    senderName: "Alice",
    status: "Rejected",
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




export default function ReceivedGifts({setGiftStatusAccepted,setGiftStatusRejected,receivedGifts}) {
  return (
    <div className="w-full px-4">
      <h2 className="p-4 mb-4 text-2xl tracking-wide font-bold text-center ">
        Received Gifts
      </h2>
      <div className="w-full mx-auto max-w-3xl">
        {receivedGifts.map((gift, index) => {
          return <GiftCard key={index} {...gift} setGiftStatusRejected={setGiftStatusRejected} setGiftStatusAccepted={setGiftStatusAccepted} ></GiftCard>;
        })}
      </div>
    </div>
  );
}

function GiftCard({ giftName, giftId, receivedDate, Sender, Status,setGiftStatusAccepted, setGiftStatusRejected,_id,createdAt}) {
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
        <p className="text-xs">{formatDate(createdAt)}</p>
      </div>
      <div className="w-full">
        Sender: <span className="font-semibold">{Sender}</span>
      </div>
   
        {Status === "ordered" ? (
          <>
             <div className="mt-4 flex flex-row items-center justify-around">
            <button className="px-2 py-1 text-sm tracking-wider border-2 border-green hover:bg-green hover:text-white" onClick={()=>setGiftStatusAccepted("Accepted",_id)}>
              <span className="pr-2">✓</span>Accept
            </button>
            <button className="px-2 py-1 text-sm tracking-wider border-2 border-light hover:bg-light hover:text-white" onClick={()=>setGiftStatusRejected("Rejected",_id)}>
              <span className="pr-2">✕</span>Reject
            </button>{" "}
            </div>
          </>
        ) : (
          <div className="text-left w-full">
            Current Status: <span className="font-semibold">{Status}</span>
          </div>
        )}
    
    </div>
  );
}
