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
    status: "accepted",
  },
  {
    giftName: "Flower Bouquet",
    giftId: "GFT12345",
    receivedDate: "2023-10-01",
    senderName: "Alice",
    status: "rejected",
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

export default function ReceivedGifts({ setGiftStatus }) {
  return (
    <div className="w-full px-4 py-2 bg-interestHover">
      <div className="w-full mx-auto max-w-3xl">
        {receivedGifts.map((gift, index) => {
          return (
            <GiftCard
              key={index}
              {...gift}
              setGiftStatus={setGiftStatus}
            ></GiftCard>
          );
        })}
      </div>
    </div>
  );
}

function GiftCard({
  giftName,
  giftId,
  receivedDate,
  senderName,
  status,
  setGiftStatus,
}) {
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

  /* const handleAccept = () => {} */
  /* const handleReject = () => {} */
  return (
    <div className="w-full p-4 my-2 rounded-md flex flex-col bg-white">
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="font-bold hover:underline hover:cursor-pointer">
          {giftName}
        </h3>
        <p className="text-xs">{formatDate(receivedDate)}</p>
      </div>
      <div className="w-full">
        Sender: <span className="font-semibold">{senderName}</span>
      </div>

      {status === "ordered" ? (
        <>
          <div className="mt-4 flex flex-row items-center justify-around">
            <button
              className="px-2 py-1 text-sm tracking-wider border-2 border-green hover:bg-green hover:text-white"
              onClick={() => setGiftStatus("accepted")}
            >
              <span className="pr-2">✓</span>Accept
            </button>
            <button
              className="px-2 py-1 text-sm tracking-wider border-2 border-light hover:bg-light hover:text-white"
              onClick={() => setGiftStatus("rejected")}
            >
              <span className="pr-2">✕</span>Reject
            </button>{" "}
          </div>
        </>
      ) : (
        <div className="text-left w-full">
          {/* Current Status: <span className="font-semibold">{status}</span> */}
          Current Status:{" "}
          <span className={buildStatusClassName(status)}>{status}</span>
        </div>
      )}
    </div>
  );
}