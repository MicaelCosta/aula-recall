import { IRecall } from "../interfaces";

class RecallService {
  listRecall = async (): Promise<IRecall[]> => {
    const response = await fetch("https://testetecnico.autoware.com.br/Recall");

    return await response.json();
  };

  buscarChassi = async (chassi: string): Promise<IRecall[]> => {
    const response = await fetch(
      `https://testetecnico.autoware.com.br/Recall/ListRecallByChassi/${chassi}`
    );

    if (response.status === 200) {
      return await response.json();
    }

    return [];
  };

  emitirCertificado = async (
    idRecall: number,
    chassi: string
  ): Promise<void> => {
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
  };
}

export default new RecallService();
