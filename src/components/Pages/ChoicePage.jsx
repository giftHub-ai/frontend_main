import React from "react";
import { useNavigate } from "react-router-dom";

const buttonClassName =
  "px-4 py-2 m-2 rounded-md text-white font-semibold text-lg tracking-wide bg-light border-2 hover:bg-white hover:text-light transition-all duration-200";

export default function ChoicePage() {
  const navigate = useNavigate();

  const handleSendGifts = () => {
    navigate("/sentGifts");
  };

  const handleReceiveGifts = () => {
    navigate("/receivedGifts");
  };
  return (
    <div className="mx-auto max-w-xl flex flex-row justify-between pt-20">
      {/* send gifts button */}
      <button className={buttonClassName} onClick={handleSendGifts}>
        Send Gifts
      </button>
      {/* Receive gifts Button */}
      <button className={buttonClassName} onClick={handleReceiveGifts}>
        Receive Gifts
      </button>
    </div>
  );
}
