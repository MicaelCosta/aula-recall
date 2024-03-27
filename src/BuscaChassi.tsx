import { IRecall } from "./IRecall";
import { useBuscaChassi } from "./useBuscaChassi";

interface IBuscaChassiProps {
  onRefresh: (listRecall: IRecall[]) => void;
}

export function BuscaChassi(props: IBuscaChassiProps) {
  const { onRefresh } = props;

  const { chassi, onChangeChassi, onBuscaPorChassi } = useBuscaChassi({
    onRefresh,
  });

  return (
    <aside>
      <input
        id="txtChassi"
        type="text"
        placeholder="Digite aqui o chassi"
        maxLength={17}
        value={chassi}
        onChange={onChangeChassi}
      />

      <button onClick={onBuscaPorChassi}>Buscar</button>
    </aside>
  );
}
