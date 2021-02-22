import React from "react";
import { Button } from "./components/Button";
import { ExperienceBar } from "./components/ExperienceBar";

import './styles/global.css'

function App() {
  return (
      <div className="container">
        <ExperienceBar />

        <div style={{marginTop:'30px'}}>
          <Button color="FireBrick">
            Botão 01
          </Button>
          <Button color="MediumSeaGreen">
            Botão 02
          </Button>
          <Button color="SteelBlue">
            Botão 03
          </Button>
        </div>
      </div>
  );
}

export default App;
