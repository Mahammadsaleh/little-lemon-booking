import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../../data';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Little Lemon home">
          <span className="header__logo" aria-hidden="true">🍋</span>
          <span className="header__brand-text">
            <span className="header__title">Little Lemon</span>
            <span className="header__location">Chicago</span>
          </span>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <nav
          id="primary-navigation"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="header__links">
            {isHome &&
              navLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} className="header__link" onClick={handleNavClick}>
                    {label}
                  </a>
                </li>
              ))}
            <li>
              <NavLink
                to="/bookings"
                className={({ isActive }) =>
                  `header__link header__link--cta ${isActive ? 'header__link--active' : ''}`
                }
                onClick={handleNavClick}
              >
                Reserve a Table
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
