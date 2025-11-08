import Button from "../components/Button.tsx";
import CardServico from "../components/CardServico.tsx";
import Presentes from "/img/presentes_v2.png";
import Celular from "/img/celular.png";
import Dashboard from "/img/dashboard.png";
import Search from "/img/search.png";



function Home() {
  return (
    <main>
      <section className="w-full bg-primary-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="flex mx-auto  flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-medium text-secundary-300 sm:text-5xl">
                Crie e gerencie sua lista de presentes de forma prática e segura
              </h1>
              <p className="mt-4 mx-auto lg:mx-0 sm:text-lg text-secundary-300">
                Tenha tudo em um só lugar, com fácil acesso para seus convidados
                e métodos de pagamento personalizados para tornar a experiência
                ainda melhor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button text="Ver exemplo" href="#" style={1} />
              </div>
            </div>
            <div>
              <img
                src={Presentes}
                alt="Pricing Illustration"
                className="w-6/7 lg:w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-secundary-100 ">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-medium text-center text-secundary-300 sm:text-3xl mb-10 ">
            Serviços
          </h2>
          <h3 className="mx-auto lg:mx-0 text-3xl text-secundary-300 text-center">
            Transforme seus momentos especiais em experiências inesquecíveis.
          </h3>
          <p className="mt-4 mx-auto lg:mx-0 sm:text-lg text-secundary-300 text-center">
            Nossa plataforma foi criada para simplificar a organização dos seus
            eventos, seja o casamento dos sonhos, o chá de casa nova ou a
            chegada do seu bebê. Com ferramentas práticas e personalizadas,
            ajudamos você a criar e gerenciar listas de presentes, controlar
            convidados e facilitar pagamentos, garantindo que seus convidados
            tenham uma experiência simples, segura e cheia de carinho.
          </p>
          <div className="flex flex-col gap-10 py-10 lg:py-24">
            <CardServico
              imagemUrl={Celular}
              imagemAlt="Celular"
              titulo="Pagamentos de ate 12x"
              descricao="Facilite para o seu convidado e dê opções variadas de
                    pagamento"
              itens={["credito", "debito", "pix"]}
              invertido={false}
            />
            <CardServico
              imagemUrl={Dashboard}
              imagemAlt="Dashboard"
              titulo="Painel do Evento"
              descricao="Centralize todas as informações do seu evento em um só lugar. Acompanhe facilmente os custos, controle a lista de convidados e visualize os presentes selecionados — tudo de forma prática e intuitiva."
              itens={["Controle", "Informações", "Notificações"]}
              invertido={true}
            />
            <CardServico
              imagemUrl={Search}
              imagemAlt="search"
              titulo="Listas Personalizadas"
              descricao="Monte sua lista de presentes do jeito que desejar: divida o valor de cada presente entre vários convidados, adicione links diretos para facilitar a escolha e aproveite recursos exclusivos para tornar sua experiência única."
              itens={["Divisão", "Organização", "Facil"]}
              invertido={false}
            />
          </div>
          <div className="mx-auto max-w-screen-xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-26 lg:pt-10 flex flex-col justify-center items-center">
            <h3 className="mx-auto lg:mx-0 text-3xl text-secundary-300 text-center">
              Comece agora e deixe seu evento do jeitinho que você sonhou.
            </h3>
            <p className="mt-4 mx-auto lg:mx-0 sm:text-lg text-secundary-300 text-center">
              Com o Listou, você organiza tudo com facilidade, compartilha com
              quem ama e recebe presentes do seu jeito. Seja para celebrar o
              amor, a nova casa ou a chegada de um bebê, aqui você encontra
              praticidade, carinho e controle em cada detalhe.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
