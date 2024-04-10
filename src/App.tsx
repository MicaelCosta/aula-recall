import "./index.css";

import { AppProvider } from "./AppContext";

import { BuscaChassi, ListRecall } from "./components";

function App() {
  return (
    <AppProvider>
      <header>
        <h1>CONSULTA RECALL</h1>
      </header>

      <main>
        <ListRecall />

        <BuscaChassi />
      </main>
    </AppProvider>
  );
}

export default App;
