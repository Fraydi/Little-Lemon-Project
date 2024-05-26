import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Header from './layout/Header';
import Footer from './layout/Footer';

const initialState = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    availableTimes: [
      '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
      '21:00', '22:00', // Additional hour for weekdays only
      '09:00', '10:00', '23:00' // Additional hours for weekends
    ]
};

function reducer(state, action) {
  switch (action.type) {
      case 'updateField':
          return { ...state, [action.field]: action.value };
      case 'updateTimesBasedOnDate':
          const dayOfWeek = new Date(action.date).getDay();
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 is Sunday, 6 is Saturday
          const updatedTimes = isWeekend ?
              ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'] :
              ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
          return { ...state, availableTimes: updatedTimes, date: action.date };
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
