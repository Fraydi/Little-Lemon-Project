import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm';

const mockState = {
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    occasion: "",
    availableTimes: ["17:00", "18:00", "19:00"]
};

const mockDispatch = jest.fn();
const mockOnDateChange = jest.fn();

test('Renders the BookingForm heading', () => {
    render(
        <Router>
            <BookingForm state={mockState} dispatch={mockDispatch} onDateChange={mockOnDateChange} />
        </Router>
    );
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm description', () => {
    render(
        <Router>
            <BookingForm state={mockState} dispatch={mockDispatch} onDateChange={mockOnDateChange} />
        </Router>
    );
    const descriptionElement = screen.getByText("Please fill in the details below to reserve your table at Little Lemon:");
    expect(descriptionElement).toBeInTheDocument();
});

test('BookingForm can be submitted by the user', () => {
    render(
        <Router>
            <BookingForm state={mockState} dispatch={mockDispatch} onDateChange={mockOnDateChange} />
        </Router>
    );

    const nameInput = screen.getByLabelText("Name");
    const phoneInput = screen.getByLabelText("Phone (+1 (XXX) XXX-XXXX)");
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByText("Reserve");

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(phoneInput, { target: { value: '+1 (123) 456-7890' } });
    fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockOnDateChange).toHaveBeenCalledWith('2023-12-31');
});
