import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    expDateMM: "",
    expDateYY: "",
    cvc: "",
  });

  return (
    <form className="cardHolder-form">
      <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
      <input
        id="cardHolderName"
        type="text"
        placeholder="e.g. Jane Appleseed"
        name="cardHolderName"
        value={FormData.cardHolderName}
        className="cardholder-name"
      />

      <label htmlFor="cardNumber">CARD NUMBER</label>
      <input
        id="cardNumber"
        type="text"
        placeholder="e.g. 1234 5678 91723 0000"
        name="cardNumber"
        value={FormData.cardNumber}
        className="card-number"
      />

      <label htmlFor="expDateMM">EXP. DATE MM/YY</label>
      <input
        id="expDateMM"
        type="text"
        placeholder="MM"
        name="expDateMM"
        value={FormData.expDateMM}
        className="exp-date-month"
      />

      <input
        id="expDateYY"
        type="text"
        placeholder="YY"
        name="expDateYY"
        value={FormData.expDateYY}
        className="exp-date-year"
      />

      <label htmlFor="cvc">CVC</label>
      <input
        id="cvc"
        type="text"
        placeholder="cvc"
        name="cvc"
        value={FormData.cvc}
        className="cvc"
      />
    </form>
  );
}
