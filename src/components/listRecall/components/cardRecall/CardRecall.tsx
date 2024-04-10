import { IRecall } from "../../../../interfaces";

import { useCardRecall } from "./useCardRecall";

interface ICardRecallProps {
  recall: IRecall;
}

export function CardRecall(props: ICardRecallProps) {
  const { recall } = props;

  const { onEmitirCertificado } = useCardRecall();

  return (
    <article>
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
          <button onClick={() => onEmitirCertificado(recall.id)}>
            Emitir Certificado
          </button>
        </div>
      )}
    </article>
  );
}
