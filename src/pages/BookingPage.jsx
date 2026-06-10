import { useReducer } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import { fetchAPI } from '../utils/bookingApi';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default BookingPage;
