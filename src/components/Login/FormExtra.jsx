export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-light focus:ring-dark border-dark rounded"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-light hover:text-dark">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}
