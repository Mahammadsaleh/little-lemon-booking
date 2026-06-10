import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm/BookingForm';
import { initializeTimes, updateTimes } from './pages/BookingPage';
import { submitAPI, fetchAPI } from './utils/bookingApi';
import { validateBookingForm } from './utils/validateBooking';

const renderBookingForm = (props = {}) => {
  const defaultProps = {
    availableTimes: { times: ['17:00', '18:00', '19:00'] },
    dispatch: vi.fn(),
    ...props,
  };

  return render(
    <MemoryRouter>
      <BookingForm {...defaultProps} />
    </MemoryRouter>
  );
};

describe('BookingForm', () => {
  it('renders the Choose date label', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  it('renders all required form fields', () => {
    renderBookingForm();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
  });

  it('disables submit when form is incomplete', () => {
    renderBookingForm();
    expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeDisabled();
  });
});

describe('initializeTimes', () => {
  it('returns the correct expected value', () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });
});

describe('updateTimes', () => {
  it('returns the same state for unknown actions', () => {
    const state = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    };
    const action = { type: 'SOME_ACTION' };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });

  it('updates times when date changes', () => {
    const state = { times: ['17:00'] };
    const date = new Date('2026-06-15');
    const newState = updateTimes(state, { type: 'UPDATE_TIMES', date });
    expect(newState.times).toEqual(fetchAPI(date));
  });
});

describe('submitAPI', () => {
  it('returns true for valid form data', () => {
    const formData = {
      date: '2026-10-12',
      time: '20:00',
      guests: '5',
      occasion: 'Birthday',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '3125550198',
    };
    expect(submitAPI(formData)).toBe(true);
  });
});

describe('validateBookingForm', () => {
  it('returns errors for empty form', () => {
    const errors = validateBookingForm({});
    expect(errors.date).toBeDefined();
    expect(errors.guests).toBeDefined();
  });

  it('rejects guest count over 10', () => {
    const errors = validateBookingForm({
      date: '2099-01-01',
      time: '18:00',
      guests: '15',
      occasion: 'Birthday',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '3125550198',
    });
    expect(errors.guests).toMatch(/between 1 and 10/i);
  });

  it('rejects past dates', () => {
    const errors = validateBookingForm({
      date: '2020-01-01',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '3125550198',
    });
    expect(errors.date).toMatch(/future/i);
  });
});
