import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/Context";
import ChoicePage from "./components/Pages/ChoicePage";
import Dashboard from "./components/Pages/Dashboard";
import ErrorPage from "./components/Pages/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import ProductPage from "./components/Pages/ProductPage";
import ReceivedGifts from "./components/Pages/ReceivedGifts";
import RecipientGiftsPage from "./components/Pages/RecipientGiftsPage";
import SentGifts from "./components/Pages/SentGifts";
import SignupPage from "./components/Pages/SignupPage";
import "./index.css";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/"
          element={<HomePage className="w-full"></HomePage>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>} />
        <Route
          path="/recipientGifts/:id"
          element={<RecipientGiftsPage></RecipientGiftsPage>}
        />
        <Route path="/timepass" element={<ChoicePage></ChoicePage>}></Route>
        <Route path="/gift/:Gift" element={<ProductPage></ProductPage>} />
        <Route
          path="/receivedGifts"
          element={<ReceivedGifts></ReceivedGifts>}
        ></Route>
        <Route path="/sentGifts" element={<SentGifts></SentGifts>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </UserProvider>
  );
}

export default App;

{
  /*  */
}
