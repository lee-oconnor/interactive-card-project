import React from "react";
import { useState } from "react";

export default function Header() {
  return (
    <div className="header-container">
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
    </div>
  );
}
