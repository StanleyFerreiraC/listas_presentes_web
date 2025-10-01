import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  href?: string;
  tipo: 1 | 2;
};

function Input({ text, href = "#", tipo }: ButtonProps) {

  const tipo1 = "inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700";

  const tipo2 = "inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
  
  return (
    <Link to={href} className={`${tipo === 1 ? tipo1 : tipo2}`}>
      {text}
    </Link>
  );
}

export default Input;
