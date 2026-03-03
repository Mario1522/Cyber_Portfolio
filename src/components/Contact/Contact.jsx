import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: 'https://facebook.com/hassan.musa.848057',
      color: '#1877f2',
    },
    // {
    //   name: 'X',
    //   icon: '🐦',
    //   url: 'https://x.com/HassanM83545570',
    //   color: '#000000',
    // },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/+201023977112',
      color: '#25d366',
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: 'https://t.me/Mmme9i0',
      color: '#0088cc',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/hassan-musa-b47495295/',
      color: '#0077b5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-subtitle"
        >
          Connect with me on social media or reach out through your preferred platform
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="social-icons"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ '--icon-color': social.color }}
            >
              <div className="icon-wrapper">
                <span className="icon-emoji">{social.icon}</span>
                <span className="icon-name">{social.name}</span>
              </div>
              <div className="icon-glow"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

