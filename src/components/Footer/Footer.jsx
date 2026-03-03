import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="footer-content"
      >
        <p className="footer-text">
          © 2026 Hassan Musa
        </p>
        <div className="footer-glow"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;

