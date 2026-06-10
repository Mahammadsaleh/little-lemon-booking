import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { occasions, INITIAL_BOOKING } from '../../data';
import { submitAPI } from '../../utils/bookingApi';
import { validateBookingForm, isFormValid } from '../../utils/validateBooking';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
  const [formData, setFormData] = useState(INITIAL_BOOKING);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  // Persist draft booking to localStorage (capstone requirement pattern)
  useEffect(() => {
    localStorage.setItem('littleLemonBooking', JSON.stringify(formData));
  }, [formData]);

  // Restore draft on mount
  useEffect(() => {
    const saved = localStorage.getItem('littleLemonBooking');
    if (saved) {
      try {
        setFormData({ ...INITIAL_BOOKING, ...JSON.parse(saved) });
      } catch {
        /* ignore invalid stored data */
      }
    }
  }, []);

  // Set default time when available slots load
  useEffect(() => {
    if (times.length && !formData.time) {
      setFormData((prev) => ({ ...prev, time: times[0] }));
    }
  }, [times, formData.time]);

  const showError = (field) => (submitAttempted || touched[field]) && errors[field];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const nextValues = { ...formData, [name]: value };
    setErrors(validateBookingForm(nextValues, times));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateBookingForm(formData, times));
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, date: value, time: '' }));

    if (value) {
      dispatch({ type: 'UPDATE_TIMES', date: new Date(value + 'T00:00:00') });
    }

    const nextValues = { ...formData, date: value, time: '' };
    setErrors(validateBookingForm(nextValues, times));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    const validationErrors = validateBookingForm(formData, times);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) return;

    const success = submitAPI(formData);
    if (success) {
      sessionStorage.setItem('confirmedBooking', JSON.stringify(formData));
      localStorage.removeItem('littleLemonBooking');
      setFormData(INITIAL_BOOKING);
      navigate('/confirmed');
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const currentErrors = validateBookingForm(formData, times);
  const canSubmit = isFormValid(currentErrors);

  return (
    <section className="booking" aria-labelledby="booking-heading">
      <div className="container booking__wrapper">
        <Link to="/" className="booking__back" aria-label="Return to home page">
          <HiArrowLeft aria-hidden="true" /> Back to Home
        </Link>

        <div className="booking__intro">
          <p className="booking__eyebrow">Reservations</p>
          <h1 id="booking-heading" className="booking__title">
            Reserve Your Table
          </h1>
          <p className="booking__subtitle">
            Join us for an unforgettable evening. Complete the form below and we&apos;ll
            hold your table — no payment required.
          </p>
        </div>

        <form
          className="booking__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Table reservation form"
        >
          <fieldset className="booking__fieldset">
            <legend className="booking__legend">Visit Details</legend>

            <div className="booking__row">
              <div className="form-group">
                <label htmlFor="res-date">Choose date</label>
                <input
                  type="date"
                  id="res-date"
                  name="date"
                  value={formData.date}
                  min={today}
                  max={maxDateStr}
                  onChange={handleDateChange}
                  onBlur={handleBlur}
                  aria-invalid={showError('date') ? 'true' : 'false'}
                  aria-describedby={showError('date') ? 'date-error' : undefined}
                  required
                />
                {showError('date') && (
                  <p id="date-error" className="field-error" role="alert">
                    {errors.date}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="res-time">Choose time</label>
                <select
                  id="res-time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={showError('time') ? 'true' : 'false'}
                  aria-describedby={showError('time') ? 'time-error' : undefined}
                  disabled={!formData.date || times.length === 0}
                  required
                >
                  {!formData.date ? (
                    <option value="">Select a date first</option>
                  ) : times.length === 0 ? (
                    <option value="">No slots available</option>
                  ) : (
                    times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))
                  )}
                </select>
                {showError('time') && (
                  <p id="time-error" className="field-error" role="alert">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div className="booking__row">
              <div className="form-group">
                <label htmlFor="guests">Number of guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="10"
                  placeholder="1–10"
                  value={formData.guests}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={showError('guests') ? 'true' : 'false'}
                  aria-describedby={showError('guests') ? 'guests-error' : undefined}
                  required
                />
                {showError('guests') && (
                  <p id="guests-error" className="field-error" role="alert">
                    {errors.guests}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="occasion">Occasion</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={showError('occasion') ? 'true' : 'false'}
                  required
                >
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
                {showError('occasion') && (
                  <p className="field-error" role="alert">
                    {errors.occasion}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset className="booking__fieldset">
            <legend className="booking__legend">Contact Information</legend>

            <div className="booking__row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="given-name"
                  aria-invalid={showError('firstName') ? 'true' : 'false'}
                  aria-describedby={showError('firstName') ? 'firstName-error' : undefined}
                  required
                />
                {showError('firstName') && (
                  <p id="firstName-error" className="field-error" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="family-name"
                  aria-invalid={showError('lastName') ? 'true' : 'false'}
                  aria-describedby={showError('lastName') ? 'lastName-error' : undefined}
                  required
                />
                {showError('lastName') && (
                  <p id="lastName-error" className="field-error" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="booking__row">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  aria-invalid={showError('email') ? 'true' : 'false'}
                  aria-describedby={showError('email') ? 'email-error' : undefined}
                  required
                />
                {showError('email') && (
                  <p id="email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                  placeholder="(312) 555-0198"
                  aria-invalid={showError('phone') ? 'true' : 'false'}
                  aria-describedby={showError('phone') ? 'phone-error' : undefined}
                  required
                />
                {showError('phone') && (
                  <p id="phone-error" className="field-error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Special requests (optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Dietary restrictions, seating preferences, etc."
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="btn btn-primary booking__submit"
            disabled={!canSubmit}
            aria-disabled={!canSubmit}
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
