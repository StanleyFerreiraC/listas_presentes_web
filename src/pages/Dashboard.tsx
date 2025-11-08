export default function Dashboard() {
  return (
    <div className="flex-grow bg-primary-200 px-4 py-10 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-medium text-center text-secundary-300 sm:text-3xl mb-10 ">
        Dashboard
      </h2>
      <h3 className="mx-auto lg:mx-0 text-3xl text-secundary-300 text-center">
        Bem-vindo ao seu painel de controle
      </h3>
      <p className="mt-4 mx-auto lg:mx-0 sm:text-lg text-secundary-300 text-center">
        Aqui você pode gerenciar seus eventos, acompanhar listas de presentes e
        monitorar pagamentos de forma fácil e intuitiva.
      </p>
    </div>
  );
}
