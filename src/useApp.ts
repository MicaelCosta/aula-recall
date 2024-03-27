import { useEffect, useState } from "react";

import { IRecall } from "./IRecall";

export function useApp() {
  const [listRecall, setListRecall] = useState<IRecall[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://testetecnico.autoware.com.br/Recall"
      );

      setListRecall(await response.json());
    })();
  }, []);

  async function onEmitirCertificado(idRecall: number, chassi: string) {
    const response = await fetch(
      `https://testetecnico.autoware.com.br/Recall/EmitirCertificado`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idRecall,
          chassi,
          email: "teste@teste.com",
        }),
      }
    );

    if (response.status === 200) {
      const result = await response.json();
      console.log("[onEmitirCertificado]", result);
    }
  }

  return {
    listRecall,
    setListRecall,
    onEmitirCertificado,
  };
}
