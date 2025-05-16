import React from 'react';
import { Link } from 'react-router-dom';


const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/priyanshu--baghel/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Priyanshu-Baghel"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a href="#contact" className="home__social-icon" >
        <i class="uil uil-envelope-alt"></i>
      </a>
    </div>
  );
}

export default Social