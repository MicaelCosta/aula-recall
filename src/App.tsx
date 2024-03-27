import "./index.css";

import { BuscaChassi } from "./BuscaChassi";
import { useApp } from "./useApp";

function App() {
  const { listRecall, setListRecall, onEmitirCertificado } = useApp();

  return (
    <>
      <header>
        <h1>CONSULTA RECALL</h1>
      </header>

      <main>
        <section id="sectionRecall">
          {listRecall.map((recall) => (
            <article key={recall.id}>
              <h2>{recall.titulo}</h2>
              <span>{recall.descricao}</span>
              <span>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(recall.dataPublicacao)
                )}
              </span>

              {recall.dataExecucao && (
                <div className="row-space">
                  <span>{recall.concessionaria}</span>
                  <span>
                    {new Intl.DateTimeFormat("pt-br").format(
                      new Date(recall.dataExecucao)
                    )}
                  </span>
                  <button onClick={() => onEmitirCertificado(recall.id, "")}>
                    Emitir Certificado
                  </button>
                </div>
              )}
            </article>
          ))}
        </section>

        <BuscaChassi onRefresh={setListRecall} />
      </main>
    </>
  );
}

export default App;
