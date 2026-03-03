import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Network Security Audit',
      description: 'Comprehensive security assessment of enterprise network infrastructure, identifying vulnerabilities and implementing remediation strategies.',
      tools: ['Nmap', 'Wireshark', 'Nessus', 'Kali Linux'],
      details: 'Conducted a full-scale security audit for a Fortune 500 company, identifying 15 critical vulnerabilities and providing detailed remediation plans. The project resulted in a 40% improvement in security posture.',
    },
    {
      id: 2,
      title: 'Web Application Penetration Testing',
      description: 'In-depth penetration testing of web applications using industry-standard tools and methodologies.',
      tools: ['Burp Suite', 'OWASP ZAP', 'Metasploit', 'SQLMap'],
      details: 'Performed comprehensive penetration testing on multiple web applications, discovering SQL injection, XSS, and CSRF vulnerabilities. Provided actionable recommendations that were implemented within 30 days.',
    },
    {
      id: 3,
      title: 'WiFi Security Assessment',
      description: 'Wireless network security evaluation and vulnerability assessment for corporate environments.',
      tools: ['Aircrack-ng', 'Wireshark', 'Kismet', 'Kali Linux'],
      details: 'Assessed wireless network security for a large organization, identifying weak encryption protocols and unauthorized access points. Implemented WPA3 and network segmentation improvements.',
    },
    {
      id: 4,
      title: 'Incident Response & Forensics',
      description: 'Digital forensics investigation and incident response for security breaches.',
      tools: ['Autopsy', 'Volatility', 'SIFT', 'Wireshark'],
      details: 'Led incident response team in investigating a data breach, identifying attack vectors, and implementing containment strategies. Recovered critical evidence and prevented further data exfiltration.',
    },
    {
      id: 5,
      title: 'Security Training Program',
      description: 'Developed and delivered cybersecurity training programs for IT teams.',
      tools: ['Custom Labs', 'Virtual Machines', 'Security Tools'],
      details: 'Created comprehensive security awareness training program covering threat detection, incident response, and best practices. Trained over 200 IT professionals across multiple organizations.',
    },
    {
      id: 6,
      title: 'Cloud Security Assessment',
      description: 'Security evaluation of cloud infrastructure and configurations.',
      tools: ['Cloud Security Tools', 'AWS Security', 'Azure Security'],
      details: 'Conducted security assessment of multi-cloud environment, identifying misconfigurations and compliance gaps. Provided recommendations that improved cloud security posture by 50%.',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      {/* <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-glow"></div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                onClick={() => openModal(project)}
                className="project-btn"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.details}</p>
              <div className="modal-tools">
                <h4>Tools Used:</h4>
                <div className="modal-tools-list">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="modal-tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default Projects;

