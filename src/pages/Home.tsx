import Button from "../components/button";

function Home() {


  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-secundare-200 sm:text-5xl">
            Crie sua lista de presentes de forma
            <strong className="text-primary"> facil e rapida</strong>
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Crie sua lista de presentes online e compartilhe com amigos e
            familiares. Facilite a escolha do presente ideal e garanta que voce
            receba exatamente o que deseja em suas ocasioes especiais.
          </p>
          <div className="mt-4 flex justify-center gap-4 sm:mt-8">
            <Button text="Criar minha lista" tipo={1} />
            <Button text="Acessar minha lista" tipo={2} href="/login"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
