import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";

function Login() {
  // Estado para controlar qual formulário é exibido (Login ou Cadastro)
  const [isLogin, setIsLogin] = useState(true);

  // Estado unificado para os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  // Função para atualizar o estado quando um input muda
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

  const login = [
    {
      name: "email",
      label: "Email",
      placeholder: "Digite seu email",
      type: "email",
    },
    {
      name: "senha",
      label: "Senha",
      placeholder: "Digite sua senha",
      type: "password",
    },
  ];

  const SingUp = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
    },
    {
      name: "sobrenome",
      label: "Sobrenome",
      placeholder: "",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "",
      type: "email",
    },
    {
      name: "senha",
      label: "Senha",
      placeholder: "",
      type: "password",
    },
    {
      name: "confirmarSenha",
      label: "Confirmar Senha",
      placeholder: "",
      type: "password",
    },
  ];

  return (
    <section className="w-full bg-secundary-100 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white shadow-md shadow-gray-400 px-10 py-16 dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 flex justify-center">
                <div className="relative flex flex-wrap rounded-full bg-gray-200 px-1 py-1 w-[340px] h-[46px] text-sm transition-all duration-300 ease-in-out">
                  {/* Label: Entrar (Login) */}
                  <label className="flex-1 text-center">
                    <input
                      type="radio"
                      name="auth"
                      className="hidden peer"
                      checked={isLogin}
                      onChange={() => setIsLogin(true)}
                    />
                    <span className="flex h-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-[#4A5568] transition-colors duration-300 peer-checked:bg-blue-500 peer-checked:font-semibold peer-checked:text-white">
                      Entrar
                    </span>
                  </label>

                  {/* Label: Criar conta (SingUp) */}
                  <label className="flex-1 text-center">
                    <input
                      type="radio"
                      name="auth"
                      className="hidden peer"
                      checked={!isLogin}
                      onChange={() => setIsLogin(false)}
                    />
                    <span className="flex h-full cursor-pointer items-center justify-center rounded-full px-2 py-2 text-[#4A5568] transition-colors duration-300 peer-checked:bg-blue-500 peer-checked:font-semibold peer-checked:text-white">
                      Criar conta
                    </span>
                  </label>
                </div>
              </div>
              <form className="space-y-4">
                {(isLogin ? login : SingUp).map((inputProps) => (
                  <div key={inputProps.label}>
                    <Input
                      label={inputProps.label}
                      name={inputProps.name}
                      type={inputProps.type}
                      placeholder={inputProps.placeholder}
                      value={formData[inputProps.name as keyof typeof formData]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </form>
              {/* Botão de Mock para Login */}
              <div className="my-4 flex justify-center">
                {isLogin ? (
                  <MockLoginButton />
                ) : (
                  <button className="w-64 cursor-pointer rounded-full bg-secundary-200 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90">
                    Criar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

// Componente auxiliar para não poluir o principal
function MockLoginButton() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleMockLogin = () => {
    login(); // Chama a função de login do nosso contexto
    navigate("/dashboard"); // Redireciona para o dashboard após o login
  };

  return (
    <button
      onClick={handleMockLogin}
      className="w-full cursor-pointer rounded-md bg-green-500 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
    >
      (Mock) Entrar como Teste
    </button>
  );
}
