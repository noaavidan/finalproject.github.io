import React from "react";
import Picture1 from './assets/Picture1.png';
import Picture3 from './assets/Picture3.png';
import Picture5 from './assets/varlogo.webp';
import BasicSelect from '../src/components/Select/Select'
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <div className="top-images">
        <img src={Picture1}></img>
      </div>
      <div className="main-content">
        <BasicSelect />
      </div>
      <div className="bottom-images">
        <img src={Picture3}></img>
        <img src={Picture5}></img>
      </div>
    </div>
  );
};

export default App;
