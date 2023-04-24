const InputComponent = ({
  labelName,
  labelId,
  type,
  register,
  registerKey,
  validations,
  placeholder,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
      <label
        className="mb-2 sm:mx-4 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={labelId}
      >
        {labelName}
      </label>
      <input
        className="w-full p-2 sm:mx-4 bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type={type}
        placeholder={placeholder}
        id="age"
        {...register(registerKey, ...validations)}
      />
    </div>
  );
};

export default InputComponent;
