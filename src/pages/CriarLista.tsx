import Button from "../components/Button";
import Input from "../components/Input";
import { TextArea } from "../components/TextArea";

export function CriarLista() {
  return (
    <div className="flex-grow bg-primary-200 flex justify-center p-4 lg:p-10">
      <div className="lg:w-1/3 space-y-4 rounded-lg border border-gray-200 bg-primary-300 p-6">
        <div className="p-2">
          <h3 className="lg:mx-0 text-3xl text-secundary-300 text-center">
            Vamos começar
          </h3>
          <p className="mt-4 lg:mx-0 sm:text-lg text-gray-500 text-center">
            Crie sua lista com carinho, conte-nos sobre esse dia especial e nós
            vamos te ajudar a torná-lo realidade.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Input label="Título" />
          <TextArea label="Descrição" rows={5} />
        </div>
        <div className="flex justify-center">
          <Button text="Next" style={1} />
        </div>
      </div>
      
    </div>
  );
}
