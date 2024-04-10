import { useBuscaChassi } from "./useBuscaChassi";

export function BuscaChassi() {
  const { chassi, onChange, onBuscaPorChassi } = useBuscaChassi();

  return (
    <aside>
      <input
        id="txtChassi"
        type="text"
        placeholder="Digite aqui o chassi"
        maxLength={17}
        value={chassi}
        onChange={onChange}
      />

      <button onClick={onBuscaPorChassi}>Buscar</button>
    </aside>
  );
}
