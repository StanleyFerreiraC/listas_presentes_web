import Button from "../components/Button.tsx";

function Home() {
  return (
    <main>
      <section className="w-full bg-pink-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:items-center lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl">
                Crie e gerencie sua lista de presentes de forma prática e segura
              </h1>
              <p className="mt-4 max-w-lg mx-auto lg:mx-0 sm:text-lg text-gray-800">
                Tenha tudo em um só lugar, com fácil acesso para seus convidados
                e métodos de pagamento personalizados para tornar a experiência
                ainda melhor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button text="Ver exemplo" href="#" style={1} />
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="img/presentes_v2.png"
                alt="Pricing Illustration"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-secundary-100 sm:text-3xl mb-12">
            Serviços
          </h2>
          <p className="mt-4 max-w-lg mx-auto lg:mx-0 sm:text-lg text-textHome">
            Transforme seus momentos especiais em experiências inesquecíveis.
          </p>
          <p className="mt-4 max-w-lg mx-auto lg:mx-0 sm:text-lg text-textHome">
            Nossa plataforma foi criada para simplificar a organização dos seus
            eventos, seja o casamento dos sonhos, o chá de casa nova ou a
            chegada do seu bebê. Com ferramentas práticas e personalizadas,
            ajudamos você a criar e gerenciar listas de presentes, controlar
            convidados e facilitar pagamentos, garantindo que seus convidados
            tenham uma experiência simples, segura e cheia de carinho.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Home;
