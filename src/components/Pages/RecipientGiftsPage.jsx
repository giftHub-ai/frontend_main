import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_base_url } from "../../config/api";
import RecipientGiftCard from "../RecipientGiftCard";

const RecipientGiftsPage = () => {
  const { id } = useParams();
  const [gifts, setGifts] = useState([]);
  const getRecipientGifts = (id) => {
    axios
      .post(`${api_base_url}/user/search/${id}`)
      .then((res) => {
        console.log(res);
        setGifts(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRecipientGifts(id);
  }, []);
  return (
    <div className="mx-auto">
      <header className="py-8 text-3xl text-light font-semibold text-center shadow-md">
        Enjoy your e-gifts
      </header>
      <section className="mx-auto max-w-6xl py-8 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gifts && gifts.length
          ? gifts.map((gift) => (
              <RecipientGiftCard key={gift._id} gift={gift}></RecipientGiftCard>
            ))
          : null}
      </section>
      <footer className="p-4 bg-light text-white text-center text-xl font-semibold">
        Hope you loved the gifts!
      </footer>
    </div>
  );
};

export default RecipientGiftsPage;
