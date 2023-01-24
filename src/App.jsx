import { useState } from "react";
import Form from "./Form";

function App() {
  return (
    <div className="container">
      <header className="header-div">
        <div className="card-back">
          <div className="black-stripe"></div>
          <div className="grey-stripe">
            <span className="grey-stripe-span">000</span>
          </div>
        </div>

        <div className="card-front">
          <div className="logo"></div>
          <div className="card-number"></div>
          <div className="card-name"></div>
          <div className="card-exp"></div>
        </div>
      </header>

      <div className="main-wrapper">
        <Form />
      </div>
    </div>
  );
}

export default App;
