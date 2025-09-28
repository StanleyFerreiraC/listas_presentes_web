type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
};

function Button({ text, href = "#", className = "" }: ButtonProps) {
  if (className === "") {
    className =
      "inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700";
  }

  return (
    <a className={`${className}`} href={href}>
      {text}
    </a>
  );
}

export default Button;
