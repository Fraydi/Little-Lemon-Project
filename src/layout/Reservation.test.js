import React from "react";
import { render, screen } from "@testing-library/react";
import Reservation from "./Reservation";
import BookingForm from "../components/BookingForm";

jest.mock("../components/BookingForm");

describe("Reservation component", () => {
  const mockState = {};
  const mockDispatch = jest.fn();
  const mockOnDateChange = jest.fn();

  beforeEach(() => {
    BookingForm.mockImplementation(({ state, dispatch, onDateChange }) => (
      <div>Mock Booking Form</div>
    ));
  });

  test("renders description section correctly", () => {
    render(<Reservation state={mockState} dispatch={mockDispatch} />);
    expect(screen.getByText("Discover the art of Mediterranean dining.")).toBeInTheDocument();
    expect(screen.getByText(/Step into the warm, welcoming atmosphere/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve your table now and enjoy a memorable dining experience!/i)).toBeInTheDocument();
  });

  test("renders BookingForm component", () => {
    render(<Reservation state={mockState} dispatch={mockDispatch} />);
    expect(screen.getByText("Mock Booking Form")).toBeInTheDocument();
  });
});
