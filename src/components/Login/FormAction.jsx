import { Link } from "react-router-dom";
export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <div>
          <button
            type={action}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-light hover:bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark mt-10"
            onSubmit={handleSubmit}
          >
            {text}
          </button>
          <p className="py-2 text-xs text-right">
            Don't have an account ?{" "}
            <span className="text-light hover:cursor-pointer hover:text-background">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
