import { motion } from "framer-motion";

type CardServicoProps = {
  titulo: string;
  descricao: string;
  imagemUrl: string;
  imagemAlt?: string;
  itens: string[];
  invertido?: boolean;
};

function CardServico({
  titulo,
  descricao,
  imagemUrl,
  imagemAlt = "",
  itens,
  invertido = false,
}: CardServicoProps) {
  return (
    <motion.div
      className={`flex ${
        invertido ? "justify-end" : "justify-start"
      } overflow-x-hidden`}
      initial={{ opacity: 0, x: invertido ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <article className="w-full min-h-[565px] md:min-h-[342px] lg:w-5/6 lg:h-[445px] bg-secundary-200 rounded-2xl overflow-hidden">
        <div
          className={`flex px-7 lg:px-12 justify-center items-center lg:gap-10 py-10 lg:py-0 lg:h-full flex-col ${
            invertido ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* BLOCO DA IMAGEM */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={imagemUrl}
              alt={imagemAlt}
              className="w-full max-w-[311px] md:max-w-full mx-auto md:mx-0 rounded-lg"
              loading="lazy"
            />
          </div>

          {/* BLOCO DE TEXTO E ITENS */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl text-white text-start">{titulo}</h3>
            <p className="mt-2 sm:text-md text-white text-start">{descricao}</p>
            <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {itens.map((item, index) => (
                <li
                  key={index}
                  className="p-2 flex items-center justify-center rounded-lg bg-white"
                >
                  <p className="text-sm text-secundary-300 text-center">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default CardServico;
