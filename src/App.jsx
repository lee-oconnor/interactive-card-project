import { useState } from "react";

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
        <form className="card-details">
          <input className="cardholder-name" />
          <input className="cardholder-number" />
          <input className="exp-date-month" />
          <input className="exp-date-year" />
          <input className="cvc" />
          <button className="confirm-btn"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
