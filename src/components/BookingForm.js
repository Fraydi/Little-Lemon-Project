import React from 'react';
import Button from './Button';
import './BookingForm.css';

function BookingForm({ state, dispatch, onDateChange }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    };

    const handleChange = (field, value) => {
        if (field === 'date') {
            onDateChange(value); // Call the function passed from App
        } else {
            dispatch({ type: 'updateField', field, value });
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Reserve a Table</h3>
            <p>Please fill in the details below to reserve your table at Little Lemon:</p>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={state.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
            />

            <label htmlFor="phone">Phone (+1 (XXX) XXX-XXXX)</label>
            <input
                type="tel"
                id="phone"
                value={state.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                required
                pattern="^\+1 \(\d{3}\) \d{3}-\d{4}$"
                title="+1 (XXX) XXX-XXXX format required"
            />

            <label htmlFor="email">Email (Optional)</label>
            <input
                type="email"
                id="email"
                value={state.email}
                onChange={(e) => handleChange('email', e.target.value)}
            />

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={state.date}
                onChange={(e) => handleChange('date', e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={state.time}
                onChange={(e) => handleChange('time', e.target.value)}
                required
            >
                {state.availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                ))}
            </select>

            <label htmlFor="res-guests">Number of guests</label>
            <input
                type="number"
                id="res-guests"
                value={state.guests || 2}
                onChange={(e) => handleChange('guests', e.target.value)}
                required
                min={1}
            />

            <label htmlFor="res-occasion">Occasion (Optional)</label>
            <select
                id="res-occasion"
                value={state.occasion}
                onChange={(e) => handleChange('occasion', e.target.value)}
            >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <Button title="Reserve" />
        </form>
    );
}

export default BookingForm;
