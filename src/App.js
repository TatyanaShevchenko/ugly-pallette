import React, { useState } from "react";
import "normalize.css";
import "./App.css";

import { Button } from "./components/button";
import { Pallete } from "./components/pallete";

function App() {

  const [colorPallette, setColorPallete] = useState([]);

  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  function createColorPallete() {
    let counter = 0;
    let colors = [];
    while (counter < 5) {
      const randomColor = getRandomColor();
      colors.push(randomColor);
      counter+=1;
    }
    setColorPallete(colors);
  }

  return (
    <div className="App">
      <div className="App__container">
      <h1 className="Title">Wanna get an awefully awesome color palette?</h1>
      <p className="Description">
        Use my extremely unintelligent random color palette creator
      </p>
      <Button create={createColorPallete} />
      <Pallete colors={colorPallette} />
      </div>
    </div>
  );
}

export default App;
