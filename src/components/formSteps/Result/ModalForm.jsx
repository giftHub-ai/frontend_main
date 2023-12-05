import React from "react";
import Button from "../../Button";
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "../../Toast";
import { useState } from "react";


const ModalForm = ({ selectedGift,  setIsOpenModal }) => {
  const token =localStorage.getItem("token");
  console.log(token);
  const [senderName, setSenderName ] = useState('');
  const [recieverEmail, setRecieverEmail ] = useState('');
  const checkoutHandler = async (amount = 500) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/getkey");
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

      const {
        data: { PaymentsDetails },
      } = await axios.post("http://localhost:5000/payment/buyGift", {
        email: recieverEmail,
        ImageLink:selectedGift['Image Link'],
        Amount: selectedGift.Budget *100,
        giftName:selectedGift.Gift,
      },
      config
      );
    console.log(PaymentsDetails);
  
    const options = {
      key,
      amount: selectedGift.Budget,
      currency: "INR",
      name: selectedGift.Gift,
      description: `GiftHub Payment using Razorpay Payment Gateway ${selectedGift.Gift}` ,
      image:selectedGift['Image Link'],
      order_id: PaymentsDetails.id,
      callback_url:`http://localhost:5000/payment/paymentverification/${token}`,
      prefill: {
        name: "Kartik Gamot",
        email: "",
        contact: "8963089123",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  let customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
 
  return (
    <div className="p-4 z-50">
      <Toast />
      <h2 className="text-xl font-semibold text-center mb-4">
        Enter required details to send to Recipient{" "}
      </h2>
      <label htmlFor="">Enter your name : </label>
      <input
        placeholder="John Deo"
        required
        className="modal-form-input"
        onChange={(e) => setSenderName(e.target.value)}
      ></input>

      <br />
      <label htmlFor="">Enter Recipient email : </label>
      <input
        placeholder="johndeo@gmail.com"
        className="modal-form-input"
        required
        onChange={(e) => setRecieverEmail(e.target.value)}
      ></input>
      <div className="flex justify-center gap-x-8 mt-4">
        <div
          onClick={() => {
            checkoutHandler();
            setIsOpenModal(false);
          }}
        >
          <Button text="Send Gift" />
        </div>
        <div onClick={() => setIsOpenModal(false)}>
          <Button text="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
