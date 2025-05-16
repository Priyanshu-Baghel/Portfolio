import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Priyanshu Baghel</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/priyanshu--baghel/"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/Priyanshu-Baghel"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="mailto:baghelpriyanshu2003@gmail.com.com"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="uil uil-envelope-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Priyanshu Baghel. All rigths reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer