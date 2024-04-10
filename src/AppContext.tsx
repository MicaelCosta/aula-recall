import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useRef,
  RefObject,
} from "react";

import { IRecall } from "./interfaces";
import RecallService from "./service/RecallService";

interface IAppContextProps {
  listRecall: IRecall[];
  chassiRef: RefObject<string>;
  onChangeListRecall: (listRecallNew: IRecall[]) => void;
  onChangeChassi: (chassi: string) => void;
}

const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

export function useAppContext() {
  const context = useContext(AppContext);

  return context;
}

interface IAppProviderProps {
  children: ReactNode;
}

export function AppProvider(props: IAppProviderProps) {
  const { children } = props;

  const [listRecall, setListRecall] = useState<IRecall[]>([]);

  const chassiRef = useRef("");

  useEffect(() => {
    (async () => {
      setListRecall(await RecallService.listRecall());
    })();
  }, []);

  const onChangeListRecall = useCallback((listRecallNew: IRecall[]) => {
    setListRecall(listRecallNew);
  }, []);

  /* const listRecallExecutado = useMemo(() => {
    return listRecall.filter((a) => a.dataExecucao !== null);
  }, [listRecall]); */

  const onChangeChassi = useCallback((chassi: string) => {
    chassiRef.current = chassi;
  }, []);

  return (
    <AppContext.Provider
      value={{ listRecall, chassiRef, onChangeListRecall, onChangeChassi }}
    >
      {children}
    </AppContext.Provider>
  );
}
