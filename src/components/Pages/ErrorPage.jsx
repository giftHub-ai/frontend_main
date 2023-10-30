import React from "react";

function ErrorPage() {
  return (
    <div className="h-screen max-w-3xl flex flex-col justify-center items-center">
      <div className="p-4 ">
        <div className="my-2 text-3xl font-bold text-center">OOops!</div>
        <div className="my-2 text-6xl font-bold">Error 404!</div>
        <div className="my-2 text-xl font-bold text-center text-light">
          Page not found
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
