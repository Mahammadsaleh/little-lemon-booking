# Little Lemon — Table Booking Website

A responsive React web application for **Little Lemon**, a family-owned Mediterranean restaurant in Chicago. Guests can explore the menu, read testimonials, learn about the restaurant, and **reserve a table online** with full client-side validation.

Built as a Meta Front-End Developer Capstone project.

## Live Demo

Deploy locally or to Vercel/Netlify — see [Deployment](#deployment) below.

## Features

- **Home page** — Hero, seasonal menu highlights, guest testimonials, and restaurant story
- **Booking page** — Controlled reservation form with real-time validation
- **Confirmation page** — Booking summary after successful submission
- **Dynamic time slots** — Available times update when the date changes (`useReducer` + mock API)
- **Accessibility** — Semantic HTML, ARIA labels, skip link, keyboard-friendly navigation
- **Responsive design** — Mobile-first layout from 320px to desktop
- **Unit tests** — Vitest + React Testing Library

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI components |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [Vitest](https://vitest.dev/) | Unit testing |
| [React Testing Library](https://testing-library.com/react) | Component tests |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "little lemon"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Tests

```bash
# Run all tests once
npm test

# Watch mode during development
npm run test:watch
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About/           # Restaurant story section
│   ├── BookingForm/     # Reservation form with validation
│   ├── Card/            # Reusable menu card
│   ├── ConfirmedBooking/# Success confirmation view
│   ├── Footer/          # Site footer with contact info
│   ├── Header/          # Navigation & branding
│   ├── Hero/            # Landing hero banner
│   ├── Layout/          # Shared page wrapper
│   ├── Specials/        # Weekly menu highlights
│   └── Testimonials/    # Guest review cards
├── pages/
│   ├── HomePage.jsx
│   ├── BookingPage.jsx  # useReducer for available times
│   └── ConfirmedBookingPage.jsx
├── utils/
│   ├── bookingApi.js    # fetchAPI & submitAPI (mock)
│   └── validateBooking.js
├── data.js              # Content & configuration
└── App.test.jsx         # Unit tests
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/bookings` | Reservation form |
| `/confirmed` | Booking confirmation |

## Form Validation

| Field | Rules |
|-------|-------|
| Date | Required, today or future, max 90 days ahead |
| Time | Required, must be in available slots |
| Guests | Required, integer between 1 and 10 |
| Occasion | Required |
| First / Last name | Required, 2–50 letters |
| Email | Required, valid format |
| Phone | Required, 10–15 digits |

## Deployment

### Vercel

```bash
npm run build
# Connect repo to Vercel — framework preset: Vite
```

### Netlify

```bash
npm run build
# Publish directory: dist
```

## Assignment Checklist

- [x] UX/UI design with responsive layout
- [x] Accessibility (semantic HTML, ARIA, skip link)
- [x] Unit tests (BookingForm, initializeTimes, updateTimes, submitAPI, validation)
- [x] Functional booking form with validation
- [x] Semantic HTML & mobile responsiveness
- [x] Git repository
- [x] Clear code structure with comments on non-obvious logic
- [x] Edge cases & meaningful error messages
- [x] README with setup instructions

## License

This project is for educational purposes as part of the Meta Front-End Developer Professional Certificate.
