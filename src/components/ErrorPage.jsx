import React from "react";

function ErrorPage() {
  return (
    <div className="border w-full h-screen flex flex-col justify-center items-center">
      <div className="text-6xl font-bold text-red">Error 404!</div>
      <div className="py-4 text-3xl ">Page not found</div>
    </div>
  );
}

export default ErrorPage;
