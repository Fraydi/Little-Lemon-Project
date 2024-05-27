import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { initializeTimes, updateTimes } from './utils/timesFunctions';

const initialState = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    availableTimes: initializeTimes()
};

function reducer(state, action) {
  switch (action.type) {
      case 'updateField':
          return { ...state, [action.field]: action.value };
      case 'updateTimesBasedOnDate':
          return { ...state, availableTimes: updateTimes(action.date), date: action.date };
      default:
          throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations state={state} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
