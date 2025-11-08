import Button from "./Button";

export default function PrimeiroAcesso() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h3 className="mx-auto lg:mx-0 text-3xl text-secundary-300 text-center">
        Bem-vindo ao seu painel de controle
      </h3>
      <p className="mt-4 mx-auto lg:mx-0 sm:text-lg text-secundary-300 text-center">
        Aqui você pode gerenciar seus eventos, acompanhar listas de presentes e
        monitorar pagamentos de forma fácil e intuitiva.
      </p>
      <div className="mt-4">
        <Button text="Criar Lista" style={1} href="/criar-lista" />
      </div>
    </div>
  );
}
