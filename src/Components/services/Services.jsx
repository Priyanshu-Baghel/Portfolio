import React, { useState } from 'react';
import "./services.css"

const servicesData = [
  {
    icon: "uil uil-brain",
    title: "AI & ML Solutions",
    description:
      "I develop AI/ML-based applications, specializing in deep learning, system optimization, and real-world problem-solving.",
    services: [
      "AI-driven software development.",
      "Machine learning model training and deployment.",
      "Deep learning-based research projects.",
      "Optimization of AI algorithms for efficiency.",
      "Custom AI/ML solutions for real-world challenges.",
    ],
  },
  {
    icon: "uil uil-arrow",
    title: "Full-Stack Web Development",
    description:
      "I specialize in building dynamic and scalable web applications, integrating robust backend systems with modern frontend technologies.",
    services: [
      "Developing interactive and responsive web applications using React.js, Node.js, and Flask.",
      "Designing and managing databases with MongoDB, MySQL, and Firebase.",
      "Creating and integrating RESTful APIs for seamless data communication.",
      "Implementing authentication, security measures, and performance optimization.",
      "Developing real-time data visualization and analytics dashboards.",
    ],
  },
  {
    icon: "uil uil-cloud-computing",
    title: "Cloud & System Programming",
    description:
      "I design scalable cloud-native applications and optimize system-level programming for high performance and reliability.",
    services: [
      "Cloud-based software architecture.",
      "System-level programming (OS, embedded systems).",
      "FPGA and IoT-based solutions.",
      "Efficient load balancing and system optimization.",
      "Scalable API and backend development.",
    ],
  },
  {
    icon: "uil uil-web-grid",
    title: "UI/UX Designer",
    description:
      "I design intuitive, user-centered interfaces for web and mobile apps, focusing on user experience and visual aesthetics.",
    services: [
      "UI/UX Prototyping.",
      "Responsive design creation.",
      "User research and persona building.",
      "Wireframing & testing.",
      "Design system development.",
    ],
  },
  {
    icon: "uil uil-pen",
    title: "Technical Content & Research",
    description:
      "I write and publish research papers, technical articles, and educational content on emerging technologies and software architecture.",
    services: [
      "Research paper writing and publication.",
      "Technical documentation & tutorials.",
      "Content creation for AI, ML, OS, and cloud computing.",
      "Educational guides for programming and software development.",
      "Technical reviews and whitepapers.",
    ],
  },
  {
    icon: "uil uil-edit",
    title: "Visual Designer",
    description:
      "I create impactful visuals, illustrations, and brand designs to help businesses convey their message clearly and memorably.",
    services: [
      "Logo and branding design.",
      "Social media graphics.",
      "Marketing collateral design.",
      "Creative illustrations.",
      "Typography and color schemes.",
    ],
  },
];

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(' ')[0]} <br /> {service.title.split(' ').slice(1).join(' ')}
              </h3>
            </div>

            <span
              className="services__button"
              onClick={() => toggleTab(index + 1)}
            >
              View More{' '}
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === index + 1
                  ? 'services__modal active-modal'
                  : 'services__modal'
              }
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-services grid">
                  {service.services.map((item, idx) => (
                    <li className="services__modal-service" key={idx}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
