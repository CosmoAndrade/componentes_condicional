import { useState } from "react";
import Componente01 from "./Componente01";
import Componente02 from "./Componente02";
import { Btn } from "./style";
import "./styles.css";

export default function App() {
  const [tela, setTela] = useState(true);

  return (
    <div className="App">
      <h1>Jesus Vive!</h1>

      <Btn
        active={tela}
        onClick={() => {
          setTela(!tela);
        }}
      >
        {tela ? "Componente 01" : "Componente 02"}
      </Btn>

      <Btn
        active={!tela}
        onClick={() => {
          setTela(!tela);
        }}
      >
        {tela ? "Componente 02" : "Componente 01"}
      </Btn>

      {tela ? <Componente01 /> : <Componente02 />}
    </div>
  );
}
