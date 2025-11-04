import Button from "../components/Button";

function Login() {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white shadow-md shadow-gray-400 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <h1 className="text-4xl font-bold text-secundare-200 sm:text-5xl">
                  Crie sua conta
                </h1>
                <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                  Preencha seus dados
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="Name" className="relative ">
                    <input
                      type="name"
                      id="Name"
                      placeholder=""
                      className="peer mt-0.5 p-3 w-full rounded border-gray-400 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                      *Nome completo
                    </span>
                  </label>
                </div>

                <div>
                  <label htmlFor="Email" className="relative">
                    <input
                      type="email"
                      id="Email"
                      placeholder=""
                      className="peer mt-0.5 p-3 w-full rounded border-gray-500 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                      *Email
                    </span>
                  </label>
                </div>

                <div>
                  <label htmlFor="Telefone" className="relative">
                    <input
                      type="tel"
                      id="Telefone"
                      placeholder="+55 (99) 99999-9999"
                      className="peer mt-0.5 p-3 w-full rounded border-gray-500 shadow-sm sm:text-sm placeholder-transparent focus:placeholder-gray-400 focus:placeholder-ocupacity-100 transion duration-300"
                    />

                    <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                      *Telefone
                    </span>
                  </label>
                </div>

                <div>
                  <label htmlFor="Password" className="relative">
                    <input
                      type="passord"
                      id="Password"
                      placeholder=""
                      className="peer mt-0.5 p-3 w-full rounded border-gray-500 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                      *Senha
                    </span>
                  </label>
                </div>

                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <div className="mt-4 flex justify-center gap-4 sm:mt-8">
                <Button text="Criar Conta" style={1} href="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
