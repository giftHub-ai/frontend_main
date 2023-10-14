import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ChoicePage from "./components/Pages/ChoicePage";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ReceivedGifts from "./components/Pages/ReceivedGifts";
import RecipientGiftsPage from "./components/Pages/RecipientGiftsPage";
import SentGifts from "./components/Pages/SentGIfts";
import SignupPage from "./components/Pages/SignupPage";
import "./index.css";

function App() {
  const [formDisplay, setFormDisplay] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            className="w-full"
            setFormDisplay={setFormDisplay}
          ></HomePage>
        }
      ></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignupPage></SignupPage>} />
      <Route
        path="/recipientGifts/:id"
        element={<RecipientGiftsPage></RecipientGiftsPage>}
      />
      <Route path="/timepass" element={<ChoicePage></ChoicePage>}></Route>
      <Route
        path="/receivedGifts"
        element={<ReceivedGifts></ReceivedGifts>}
      ></Route>
      <Route path="/sentGifts" element={<SentGifts></SentGifts>}></Route>
    </Routes>
  );
}

export default App;
