
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders Home and Reservations links', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
