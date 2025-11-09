import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  href?: string;
  style: 1 | 2;
};

function Button({ text, href = "#", style = 1 }: ButtonProps) {

  const style1 = "block w-full rounded bg-secundary-200 px-12 py-3 text-sm text-center font-medium text-white shadow hover:bg-blue-400 active:bg-blue-500 sm:w-auto";

  const style2 = "inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
  
  return (
    <Link to={href} className={`${style === 1 ? style1 : style2}`}>
      {text}
    </Link>
  );
}

export default Button;
