import React from "react";
import Button from "../../Button";
import axios from "axios";
import toast from "react-hot-toast";
import Toast from "../../Toast";
const checkoutHandler = async (amount = 500) => {
  const {
    data: { key },
  } = await axios.get("http://localhost:5000/api/getkey");

  const {
    data: { PaymentsDetails },
  } = await axios.post("http://localhost:5000/payment/buyGift", {
    email: "twinshup@gmail.com",
    link: "http//",
    Amount: 343,
    Name: "kartik",
  });
  console.log(PaymentsDetails);

  const options = {
    key,
    amount: PaymentsDetails.amount,
    currency: "INR",
    name: "GiftHub",
    description: "GiftHub Payment Razorpay Integration",
    image: "https://avatars.githubusercontent.com/u/131351645?s=96&v=4",
    order_id: PaymentsDetails.id,
    callback_url: "http://localhost:5000/payment/paymentverification",
    prefill: {
      name: "",
      email: "",
      contact: "",
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

const ModalForm = ({ currModalData, setCurrModalData, setIsOpenModal }) => {
  let customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const submitBoughtGiftData = (obj) => {
    console.log(obj);
    delete obj.rating;
    const userRating = JSON.stringify(obj);
    axios
      .post("http://localhost:3000/user/addUser", userRating, customConfig)
      .then((res) => {
        toast.success("Gift sent successfully!", {
          duration: 2000,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code, {
          duration: 2000,
          position: "top-right",
        });
      });
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
        className="modal-form-input"
        onChange={(e) => {
          let obj = { ...currModalData, SenderName: e.target.value };
          setCurrModalData(obj);
        }}
      ></input>
      <br />
      <label htmlFor="">Enter your email : </label>
      <input
        placeholder="abc@gmail.com"
        className="modal-form-input"
        onChange={(e) => {
          let obj = { ...currModalData, SenderEmail: e.target.value };
          setCurrModalData(obj);
        }}
      ></input>
      <br />
      <label htmlFor="">Enter Recipient email : </label>
      <input
        placeholder="xyz@gmail.com"
        className="modal-form-input"
        onChange={(e) => {
          let obj = { ...currModalData, RecipientEmail: e.target.value };
          setCurrModalData(obj);
          console.log(currModalData);
        }}
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
