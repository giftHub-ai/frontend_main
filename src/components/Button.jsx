function SubmitButton({ text }) {
  return (
    <button
      className="px-5 py-2 my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type="submit"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
