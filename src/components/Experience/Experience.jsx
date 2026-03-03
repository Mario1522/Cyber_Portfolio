import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Cybersecurity Specialist',
      company: 'TechSecure Solutions',
      description: 'Leading security assessments, penetration testing, and incident response for enterprise clients. Mentoring junior security analysts and developing security frameworks.',
    },
    {
      year: '2021 - 2023',
      title: 'Cybersecurity Analyst',
      company: 'Digital Defense Corp',
      description: 'Conducted vulnerability assessments, security audits, and threat analysis. Implemented security controls and monitored network traffic for anomalies.',
    },
    // {
    //   year: '2019 - 2021',
    //   title: 'Junior Security Engineer',
    //   company: 'SecureNet Systems',
    //   description: 'Assisted in security testing, documentation, and tool development. Gained expertise in various security tools and methodologies.',
    // },
  ];

  return (
    <div></div>
    // <section id="experience" className="experience" ref={ref}>
    //   <div className="container">
    //     <motion.h2
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ duration: 0.6 }}
    //       className="section-title"
    //     >
    //     Experience
    //     </motion.h2>

    //     <div className="timeline">
    //       {experiences.map((exp, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    //           animate={isInView ? { opacity: 1, x: 0 } : {}}
    //           transition={{ duration: 0.6, delay: index * 0.2 }}
    //           className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    //         >
    //           <div className="timeline-marker"></div>
    //           <div className="timeline-content">
    //             <div className="timeline-year">{exp.year}</div>
    //             <h3 className="timeline-title">{exp.title}</h3>
    //             <div className="timeline-company">{exp.company}</div>
    //             <p className="timeline-description">{exp.description}</p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Experience;

