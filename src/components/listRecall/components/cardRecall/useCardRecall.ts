import { useAppContext } from "../../../../AppContext";
import RecallService from "../../../../service/RecallService";

export function useCardRecall() {
  const { chassiRef } = useAppContext();

  async function onEmitirCertificado(idRecall: number) {
    RecallService.emitirCertificado(idRecall, chassiRef.current || "");
  }

  return { onEmitirCertificado };
}
