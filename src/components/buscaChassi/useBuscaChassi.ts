import { ChangeEvent, useState } from "react";

import { useAppContext } from "../../AppContext";
import RecallService from "../../service/RecallService";

export function useBuscaChassi() {
  const { onChangeListRecall, onChangeChassi } = useAppContext();

  const [chassi, setChassi] = useState("");

  function onChange(value: ChangeEvent<HTMLInputElement>) {
    setChassi(value.target.value);
    onChangeChassi(value.target.value);
  }

  async function onBuscaPorChassi() {
    //JH4KA8270PC000001, 1HGCM82633A123456, YV1SZ58D911234567

    if (!chassi || chassi.length !== 17) {
      return;
    }

    onChangeListRecall(await RecallService.buscarChassi(chassi));
  }

  return {
    chassi,
    onChange,
    onBuscaPorChassi,
  };
}
