import React from "react";
import Delivery from "../assets/bike.png";
import './Card.css';

function Card(props) {
  return (
    <article className="card">
      <img src={props.image} alt={props.alt_pic} className="card-image" />
      <div className="card-content">
        <header className="card-header">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-price">{props.price}</h4>
        </header>
        <p className="card-description">{props.description}</p>
        <footer className="card-footer">
          <h5>Order A Delivery</h5>
          <img src={Delivery} alt="delivery" className="delivery-icon" />
        </footer>
      </div>
    </article>
  );
}

export default Card;
