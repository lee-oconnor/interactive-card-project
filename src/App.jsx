import { useState } from "react";

function App() {
  return (
    <div class="container">
      <header class="header-div">
        <div class="card-back">
          <div class="black-stripe"></div>
          <div class="grey-stripe">
            <span class="grey-stripe-span">000</span>
          </div>
        </div>
        <div class="card-front">
          <div class="logo"></div>
          <div class="card-number"></div>
          <div class="card-name"></div>
          <div class="card-exp"></div>
        </div>
      </header>

      <form class="card-details">
        <input class="cardholder-name" />
        <input class="cardholder-number" />
        <input class="exp-date-month" />
        <input class="exp-date-year" />
        <input class="cvc" />
        <button class="confirm-btn"></button>
      </form>
    </div>
  );
}

export default App;
