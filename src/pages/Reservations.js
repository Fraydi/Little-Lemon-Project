// Reservations.js
import React from 'react';
import Reservation from '../layout/Reservation';

function Reservations({ state, dispatch }) {
  return (
    <Reservation state={state} dispatch={dispatch} />
  );
}

export default Reservations;
