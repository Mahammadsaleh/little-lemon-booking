import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { contactInfo } from '../../data';
import './Footer.css';

const socialLinks = [
  { id: 1, icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com' },
  { id: 2, icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { id: 3, icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com' },
];

const Footer = () => {
  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">🍋</span>
          <div>
            <p className="footer__title">Little Lemon</p>
            <p className="footer__location">Chicago</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#menu">Seasonal Menu</a></li>
            <li><a href="#testimonials">Guest Voices</a></li>
            <li><a href="/bookings">Reservations</a></li>
          </ul>
        </nav>

        <address className="footer__contact">
          <p>{contactInfo.address}</p>
          <p>
            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>{contactInfo.phone}</a>
          </p>
          <p>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
          <p>{contactInfo.hours}</p>
        </address>

        <div className="footer__social">
          {socialLinks.map(({ id, icon: Icon, label, href }) => (
            <a
              key={id}
              href={href}
              aria-label={`Visit us on ${label}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Little Lemon Chicago. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
