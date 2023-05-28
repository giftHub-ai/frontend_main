import React from "react";
import Button from "../../Button";

const ModalForm = ({ currModalData, setCurrModalData }) => {
  const submitBoughtGiftData = (obj) => {
    if (relevancyData === null) {
      toast.info("Provide ratings first!", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }

    const userRating = JSON.stringify(obj);
    console.log("to send ", obj);

    axios
      .post("http://127.0.0.1:5000/addEntry", userRating, customConfig)
      .then((res) => {
        toast.success("Data added successfully!", {
          duration: 2000,
          position: "top-right",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          duration: 2000,
          position: "top-right",
        });
      });
  };
  return (
    <div className="p-4 z-50">
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
        <div onClick={() => {submitBoughtGiftData(currModalData)}}>
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
