/**
 * Validates booking form fields and returns an errors object.
 * Empty object means the form is valid.
 */
export function validateBookingForm(values, availableTimes = []) {
  const errors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!values.date) {
    errors.date = 'Please choose a reservation date.';
  } else {
    const selected = new Date(values.date + 'T00:00:00');
    if (selected < today) {
      errors.date = 'Reservations must be for today or a future date.';
    }
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 90);
    if (selected > maxDate) {
      errors.date = 'We accept bookings up to 90 days in advance.';
    }
  }

  if (!values.time) {
    errors.time = 'Please select an available time slot.';
  } else if (availableTimes.length && !availableTimes.includes(values.time)) {
    errors.time = 'This time slot is no longer available.';
  }

  const guests = Number(values.guests);
  if (!values.guests && values.guests !== 0) {
    errors.guests = 'Please enter the number of guests.';
  } else if (Number.isNaN(guests) || guests < 1 || guests > 10) {
    errors.guests = 'Guest count must be between 1 and 10.';
  }

  if (!values.occasion) {
    errors.occasion = 'Please tell us what you are celebrating.';
  }

  if (!values.firstName?.trim()) {
    errors.firstName = 'First name is required.';
  } else if (!/^[a-zA-Z\s'-]{2,50}$/.test(values.firstName.trim())) {
    errors.firstName = 'Enter a valid first name (letters only, 2–50 characters).';
  }

  if (!values.lastName?.trim()) {
    errors.lastName = 'Last name is required.';
  } else if (!/^[a-zA-Z\s'-]{2,50}$/.test(values.lastName.trim())) {
    errors.lastName = 'Enter a valid last name (letters only, 2–50 characters).';
  }

  if (!values.email?.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\+?[\d\s()-]{10,15}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number (10–15 digits).';
  }

  return errors;
}

export function isFormValid(errors) {
  return Object.keys(errors).length === 0;
}
