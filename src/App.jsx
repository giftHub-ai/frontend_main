import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import RecipientGiftsPage from "./components/Pages/RecipientGiftsPage";
import SignupPage from "./components/Pages/SignupPage";
import "./index.css";
import ProductPage from "./components/Pages/ProductPage";
import { UserProvider } from "./components/Context";

function App() {
  const [formDisplay, setFormDisplay] = useState(false);

  return (
    <UserProvider>
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
      <Route
        path="/gift/:Gift"
        element={<ProductPage></ProductPage>}
      />
    </Routes>
    </UserProvider>
  );
}

export default App;
