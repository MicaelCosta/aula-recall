import { useAppContext } from "../../AppContext";

import { CardRecall } from "./components";

export function ListRecall() {
  const { listRecall } = useAppContext();

  return (
    <section id="sectionRecall">
      {listRecall.map((recall) => (
        <CardRecall key={recall.id} recall={recall} />
      ))}
    </section>
  );
}
