type TextAreaProps = {
  label: string;
  placeholder?: string;
  type?: string;
  rows?: number;
};

export function TextArea({ label, placeholder = "", rows = 1 }: TextAreaProps) {
  return (
    <div>
      <label className="mb-[5px] block text-base font-medium text-secundary-300">
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-transparent rounded-md border border-gray-200 py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
      />
    </div>
  );
}