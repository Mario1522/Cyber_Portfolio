import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/#skills', label: 'Skills' },
    // { path: '/#projects', label: 'Projects' },
    // { path: '/#experience', label: 'Experience' },
    { path: '/#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, path) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">HM</span>
          <span className="logo-glow"></span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`navbar-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

