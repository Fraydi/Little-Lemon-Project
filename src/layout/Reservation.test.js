import React from "react";
import { render, screen } from "@testing-library/react";
import Reservation from "./Reservation";
import BookingForm from "../components/BookingForm";

jest.mock("../components/BookingForm");

describe("Reservation component", () => {
  const mockState = {};
  const mockDispatch = jest.fn();

  beforeEach(() => {
    BookingForm.mockImplementation(() => <div>Mock Booking Form</div>);
  });

  test("renders description section correctly", () => {
    render(<Reservation state={mockState} dispatch={mockDispatch} />);
    expect(screen.getByText("Reserve Your Table at Little Lemon")).toBeInTheDocument();
    expect(screen.getByText(/Step into the warm, welcoming atmosphere/i)).toBeInTheDocument();
    expect(screen.getByText(/Ready to enjoy an exquisite meal at Little Lemon/i)).toBeInTheDocument();
  });

  test("renders BookingForm component", () => {
    render(<Reservation state={mockState} dispatch={mockDispatch} />);
    expect(screen.getByText("Mock Booking Form")).toBeInTheDocument();
  });
});
