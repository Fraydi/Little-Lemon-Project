import React from "react";
import Delivery from "../assets/bike.png";
import './Card.css'; // Import the unique CSS file

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt_pic} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-price">{props.price}</h4>
        </div>
        <p className="card-description">{props.description}</p>
        <div className="card-footer">
          <h5>Order A Delivery</h5>
          <img src={Delivery} alt="delivery" className="delivery-icon" />
        </div>
      </div>
    </div>
  );
}

export default Card;
