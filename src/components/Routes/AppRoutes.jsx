import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../ErrorPage";
import ChoicePage from "../Pages/ChoicePage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProductPage from "../Pages/ProductPage";
import ReceivedGifts from "../Pages/ReceivedGifts";
import RecipientGiftsPage from "../Pages/RecipientGiftsPage";
import SignupPage from "../Pages/SignupPage";
import SentGifts from "../Pages/SentGifts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },

      {
        path: "signup",
        element: <SignupPage></SignupPage>,
      },
      {
        path: "recipientGifts/",
        children: [
          { path: "", element: <ReceivedGifts></ReceivedGifts> },
          { path: ":id", element: <RecipientGiftsPage></RecipientGiftsPage> },
        ],
      },
      {
        path: "timepass",
        element: <ChoicePage></ChoicePage>,
      },
      {
        path: "sentGifts",
        element: <SentGifts></SentGifts>,
      },
      {
        path: "gifts",
        element: <ProductPage></ProductPage>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default routes;
