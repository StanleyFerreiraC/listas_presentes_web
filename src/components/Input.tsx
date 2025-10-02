type InputProps = {
  text: string;
  placeholder: string;
  type: string;
};

function Input({ type, placeholder = "", text }: InputProps) {
  return (
    <label htmlFor={type} className="relative ">
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        className="peer mt-0.5 p-3 w-full rounded border-gray-400 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
        {text}
      </span>
    </label>
  );
}

export default Input;
