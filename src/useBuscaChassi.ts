import { ChangeEvent, useState } from "react";

import { IRecall } from "./IRecall";

interface IuseBuscaChassiProps {
  onRefresh: (listRecall: IRecall[]) => void;
}

export function useBuscaChassi(props: IuseBuscaChassiProps) {
  const { onRefresh } = props;
  const [chassi, setChassi] = useState("");

  function onChangeChassi(value: ChangeEvent<HTMLInputElement>) {
    setChassi(value.target.value);
  }

  async function onBuscaPorChassi() {
    //JH4KA8270PC000001, 1HGCM82633A123456, YV1SZ58D911234567

    if (!chassi || chassi.length !== 17) {
      return;
    }

    const response = await fetch(
      `https://testetecnico.autoware.com.br/Recall/ListRecallByChassi/${chassi}`
    );

    if (response.status === 200) {
      onRefresh(await response.json());
    }
  }

  return {
    chassi,
    onChangeChassi,
    onBuscaPorChassi,
  };
}
