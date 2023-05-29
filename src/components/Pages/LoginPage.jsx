import { Link } from "react-router-dom";
import Login from "../Login/Login";
import LoginHeader from "../Login/LoginHeader";
export default function LoginPage() {
  return (
    <div className="mt-16 max-w-md mx-auto">
      <button className="mb-10 p-4 font-semibold text-xl text-light hover:text-background hover:bg-background hover:bg-opacity-5">
        <Link to="/">Go to home</Link>
      </button>
      <LoginHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      ></LoginHeader>
      <Login></Login>
    </div>
  );
}
