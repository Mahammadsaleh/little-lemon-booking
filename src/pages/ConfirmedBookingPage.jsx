import { useMemo } from 'react';
import ConfirmedBooking from '../components/ConfirmedBooking/ConfirmedBooking';

const ConfirmedBookingPage = () => {
  const booking = useMemo(() => {
    const stored = sessionStorage.getItem('confirmedBooking');
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }, []);

  return <ConfirmedBooking booking={booking} />;
};

export default ConfirmedBookingPage;
