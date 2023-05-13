import React from 'react'
function Button({ text }) {
  return (
    <button
      className="p-2 px-4  text-[#ffffff] hover:bg-dark bg-light  font-medium rounded-lg text-lg  focus:outline-none dark:focus:ring-blue-800"
      type="submit"  
    >
      {text}
    </button>
  );
}

export default Button;
