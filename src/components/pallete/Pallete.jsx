import React from "react";
import "./Pallete.css";

export const Pallete = ({colors}) => {
  return (
    <div className="Pallete" style={{display: colors.length ? 'grid' : 'none'}}>
      <h2 className="Palette__title">Your ugly pallete</h2>
      <div className="Palette__color" style={{backgroundColor:`#${colors[0]}`}}>
          <p className="Palette__color__title">#{colors[0]}</p>
          </div>
      <div className="Palette__color" style={{backgroundColor:`#${colors[1]}`}}>
      <p className="Palette__color__title">#{colors[1]}</p>
      </div>
      <div className="Palette__color" style={{backgroundColor:`#${colors[2]}`}}>
      <p className="Palette__color__title">#{colors[2]}</p>
      </div>
      <div className="Palette__color" style={{backgroundColor:`#${colors[3]}`}}>
      <p className="Palette__color__title">#{colors[3]}</p>
      </div>
      <div className="Palette__color" style={{backgroundColor:`#${colors[4]}`}}>
      <p className="Palette__color__title">#{colors[4]}</p>
      </div>
    </div>
  );
};
