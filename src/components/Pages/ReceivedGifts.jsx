import axios from "axios";
import React, { useState } from "react";

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

export default function ReceivedGifts({ receivedGifts }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-2 bg-interestHover">
      <div className="text-3xl font-semibold text-center">Received Gifts</div>
      <div className="w-full mx-auto max-w-3xl">
        {receivedGifts.map((gift, index) => {
          return <GiftCard key={index} {...gift}></GiftCard>;
        })}
      </div>
    </div>
  );
}

function GiftCard({ giftName, Sender, Status, _id, createdAt }) {
  // Status, _id
  const [currGiftStatus, setCurrGiftStatus] = useState(Status);
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
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

  const setGiftStatusAccepted = async (giftStatus, id) => {
    console.log(id);
    axios
      .post(
        `http://localhost:5000/gift/status/${id}`,
        { status: giftStatus },
        config
      )
      .then((res) => {
        setCurrGiftStatus("Accepted");
        console.log(res);
      });

    // console.log("set gift status   ", data);
  };
  const setGiftStatusRejected = async (giftStatus, id) => {
    console.log(id);
    axios
      .post(
        `http://localhost:5000/gift/status/${id}`,
        { status: giftStatus },
        config
      )
      .then((res) => {
        setCurrGiftStatus("Rejected");
        console.log(res);
      });

    // console.log("set gift status   ", data);
  };

  return (
    <div className="w-full p-4 my-4 rounded-md flex flex-col bg-white">
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="font-bold hover:underline hover:cursor-pointer">
          {giftName}
        </h3>
        <p className="text-xs">{formatDate(createdAt)}</p>
      </div>
      <div className="w-full">
        Sender: <span className="font-semibold">{Sender}</span>
      </div>

      {Status === currGiftStatus ? (
        <>
          <div className="mt-4 flex flex-row items-center justify-around">
            <button
              className="px-2 py-1 text-sm tracking-wider border-2 border-green hover:bg-green hover:text-white"
              onClick={() => setGiftStatusAccepted("Accepted", _id)}
            >
              <span className="pr-2">✓</span>Accept
            </button>
            <button
              className="px-2 py-1 text-sm tracking-wider border-2 border-light hover:bg-light hover:text-white"
              onClick={() => setGiftStatusRejected("Rejected", _id)}
            >
              <span className="pr-2">✕</span>Reject
            </button>{" "}
          </div>
        </>
      ) : (
        <div className="text-left w-full">
          Current Status:{" "}
          <span
            className={`font-semibold ${
              currGiftStatus == "Accepted" && "text-green"
            } ${currGiftStatus == "Rejected" && "text-red"}`}
          >
            {currGiftStatus}
          </span>
        </div>
      )}
    </div>
  );
}
