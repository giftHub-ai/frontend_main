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
    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center ">
      <label
        className="mb-2 sm:mx-4 text-sm font-medium text-gray-900"
        htmlFor={labelId}
      >
        {labelName}
      </label>
      <input
        className="w-full p-2 sm:mx-4 bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500"
        type={type}
        placeholder={placeholder}
        id="age"
        {...register(registerKey, validations)}
      />
    </div>
  );
};

export default InputComponent;
