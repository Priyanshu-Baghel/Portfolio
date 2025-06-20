import React from 'react';
import './scrollUp.css';

const ScrollUp = () => {

    window.addEventListener("scroll", function(){
      const scrollUp = document.querySelector(".scrollUp");
      if (scrollUp) {
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }
    })

  return (
    <a href="" className="scrollUp">
        <i className="uil uil-arrow-up scrollUp__icon"></i>
    </a>
  )
}

export default ScrollUp