import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="divstyle">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/81DKTXzkwnL._AC._SR360,460.jpg"
        alt="Girl in a jacket"
        className="imgstyle"
      ></img>
      <h3 className="h3style">T-shirt</h3>
      <h4 className="h4style">50% off</h4>
      <button className="buttonstyle">Buy</button>
    </div>
  );
}
export default Card;
