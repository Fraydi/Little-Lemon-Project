import React from "react";
import BookingForm from "../components/BookingForm";
import './Reservation.css';

function Reservation({ state, dispatch }) {
  return (
    <section className="reservation-container">
        <article className="description-section">
            <h2 id="reserve-title">Discover the art of Mediterranean dining.</h2>
            <p>Step into the warm, welcoming atmosphere of Little Lemon, where we blend rich Mediterranean flavors with a modern touch. Our family-run bistro offers the perfect place to relax and savor meals prepared with the freshest ingredients and love.</p>
            <h3>Ready for an exquisite meal at Little Lemon? Reserve your table now and enjoy a memorable dining experience!</h3>
        </article>
        <BookingForm state={state} dispatch={dispatch} />
    </section>
  );
}

export default Reservation;
