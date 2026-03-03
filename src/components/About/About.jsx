import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import me from '../../assets/imgs/me.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    { name: 'CISCO', fullName: 'Introduction to Cybersecurity' , link: 'https://drive.google.com/file/d/1c5OKvxX-KRUde4vTc35MFkPXdGPkINQB/view?usp=drive_link' },
    { name: 'CISCO', fullName: 'Endpoint Security' , link: 'https://drive.google.com/file/d/1kgjn3ThHnMH6Kyq-juixPyneb6xNNbDm/view?usp=sharing' },
    // { name: 'CISSP', fullName: 'Certified Information Systems Security Professional' },
  ];
  const courses = [
    { name: 'CompTIA', fullName: 'Security+' },
    { name: 'eLearnSecurity', fullName: 'eJPTv1 (Junior Penetration Tester)' },
    // { name: 'CISSP', fullName: 'Certified Information Systems Security Professional' },
  ];
  const skills = [
    { name: 'Cardly', fullName: 'Cardly Profile' , link: 'https://www.credly.com/users/hassan-musa.00621d38'},
    // { name: 'CISSP', fullName: 'Certified Information Systems Security Professional' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-image-container"
          >
            <div className="about-image">
              <div className="image-placeholder">
                <img src={me} alt="HM" />
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-text"
          >
            <p className="about-description">
              I'm <span className="highlight">Hassan Musa</span>, and my job is to think like an attacker to ensure your protection as a defender. As a Penetration Tester, I spend my days attempting to breach complex systems to discover and secure points of failure. My passion lies in hunting vulnerabilities and always staying one step ahead in the ever-evolving cybersecurity landscape..
            </p>
              {/* <p className="about-description">
                With years of experience in identifying and mitigating security vulnerabilities, I help organizations 
                strengthen their defenses and maintain robust security postures. I stay current with the latest 
                security trends, tools, and methodologies to provide cutting-edge solutions.
              </p> */}

            <div className="certifications">
              <h3 className="certifications-title">Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="certification-card"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-badge">{cert.name}</a>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-name">{cert.fullName}</a>
                  </motion.div>
                ))}
              </div>
            </div>
            
             <div className="certifications">
              <h3 className="certifications-title">Courses</h3>
              <div className="certifications-list">
                {courses.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="certification-card"
                  >
                    <span className="cert-badge">{cert.name}</span>
                    <span className="cert-name">{cert.fullName}</span>
                  </motion.div>
                ))}
              </div>
            </div>

             <div className="certifications">
              <h3 className="certifications-title">Badge&Skills Wallet</h3>
              <div className="certifications-list">
                {skills.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="certification-card"
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-badge">{cert.name}</a>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-name">{cert.fullName}</a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

