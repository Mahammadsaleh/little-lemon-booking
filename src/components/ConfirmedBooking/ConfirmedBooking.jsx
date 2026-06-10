import { Link } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';
import './ConfirmedBooking.css';

const ConfirmedBooking = ({ booking }) => {
  if (!booking) {
    return (
      <section className="confirmed" aria-labelledby="confirmed-heading">
        <div className="container confirmed__card">
          <h1 id="confirmed-heading">No reservation found</h1>
          <p>It looks like you haven&apos;t completed a booking yet.</p>
          <Link to="/bookings" className="btn btn-primary">
            Make a Reservation
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="confirmed" aria-labelledby="confirmed-heading">
      <div className="container confirmed__card">
        <HiCheckCircle className="confirmed__icon" aria-hidden="true" />
        <h1 id="confirmed-heading">You&apos;re All Set!</h1>
        <p className="confirmed__message">
          Thank you, {booking.firstName}! Your table at Little Lemon has been reserved.
          A confirmation email will be sent to <strong>{booking.email}</strong>.
        </p>

        <dl className="confirmed__details">
          <div className="confirmed__detail">
            <dt>Date</dt>
            <dd>{booking.date}</dd>
          </div>
          <div className="confirmed__detail">
            <dt>Time</dt>
            <dd>{booking.time}</dd>
          </div>
          <div className="confirmed__detail">
            <dt>Guests</dt>
            <dd>{booking.guests}</dd>
          </div>
          <div className="confirmed__detail">
            <dt>Occasion</dt>
            <dd>{booking.occasion}</dd>
          </div>
          <div className="confirmed__detail">
            <dt>Name</dt>
            <dd>
              {booking.firstName} {booking.lastName}
            </dd>
          </div>
          <div className="confirmed__detail">
            <dt>Phone</dt>
            <dd>{booking.phone}</dd>
          </div>
        </dl>

        {booking.notes && (
          <p className="confirmed__notes">
            <strong>Special requests:</strong> {booking.notes}
          </p>
        )}

        <div className="confirmed__actions">
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
          <Link to="/bookings" className="btn btn-primary">
            Book Another Table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
