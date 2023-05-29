import { Link } from "react-router-dom";
import LoginHeader from "../Login/LoginHeader";
import SignUp from "../Login/SignUp";

export default function SignupPage() {
  return (
    <div className="mt-16 max-w-md mx-auto">
      <button className="mb-10 p-4 font-semibold text-xl text-light hover:text-background hover:bg-background hover:bg-opacity-5">
        <Link to="/">Go to home</Link>
      </button>
      <LoginHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <SignUp />
    </div>
  );
}
