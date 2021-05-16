import React, { useState } from "react";
import "normalize.css";
import "./App.css";

import { Button } from "./components/button";
import { Pallete } from "./components/pallete";

function App() {

  const [colorPallette, setColorPallete] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  // function onInputChange(e){
  //   setInputValue(e.target.value);
  // }

  // function runEval(){
  //   eval(inputValue);
  // }

print(1);
setTimeout(()=>print(5),0)
print(2);
print(3);
const promise1 = new Promise((resolve, reject) => {
  resolve(4);
});
const promise2= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(6);
  }, 300);
});
promise1.then( res => print(res));
promise2.then( res => print(res));

function print (n) {
  console.log(n);
}

  return (
    <div className="App">
      <div className="App__container">
      <h1 className="Title">Wanna get an awefully awesome color palette?</h1>
      {/* <input type="text" onChange={e=>onInputChange(e)} value={inputValue}></input>
      <button onClick={runEval}>EVAL</button> */}
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
