import React from 'react'
import './testimonials.css'
import GirlPhoto from '../../assets/girl.jpg'
import { FaLinkedin, FaStar } from "react-icons/fa";
import Atikesh from "../../assets/atikesh.png";


const testimonials = [
  {
    name: "Atikesh Chouhan",
    feedback: "Great experience! Highly recommend.",
    image: Atikesh,
    linkedin: "https://www.linkedin.com/in/atikeshchouhan3ba237/",
    rating: 5,
  },
  {
    name: "Anubha Mahajan",
    feedback: "Amazing service and very professional.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQG3jrG2EKwkBg/profile-framedphoto-shrink_400_400/B4DZWQbOceGcAg-/0/1741884811378?e=1747900800&v=beta&t=hNSPssRyKf1z-eSypjM9XPPc4slXnyUrEJilRr0kWh0",
    linkedin: "https://www.linkedin.com/in/anubha-mahajan/",
    rating: 4,
  },
  {
    name: "Alina Khan",
    feedback: "Quick, efficient, and friendly.",
    image: GirlPhoto,
    linkedin: "https://www.linkedin.com/in/alina-khan-346939248/",
    rating: 5,
  },
  {
    name: "Ganga Prajapat",
    feedback: "Very detail-oriented and reliable.",
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQG0rJM_kVSibw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726416995062?e=1747900800&v=beta&t=br5kIqiTo9JrpSXD15AFh4KPnIlEmpFI1VmaNWX4Kwk",
    linkedin: "https://www.linkedin.com/in/gangaprajapat/",
    rating: 4,
  },
  {
    name: "Raksha Kale",
    feedback: "A pleasure to work with—superb communication.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHSJIO3WZ1JuQ/profile-framedphoto-shrink_400_400/B4DZWoD8kJG4Ag-/0/1742281362086?e=1747900800&v=beta&t=-nEEaWNeZHQygn3XgDwcxeSxF39SMSWY0hVxe4CRxNc",
    linkedin: "https://www.linkedin.com/in/rakshakale/",
    rating: 5,
  },
  {
    name: "Durgesh Tripathi",
    feedback: "Truly dedicated and result-oriented professional.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHemCzFUSZfxw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1693802109534?e=1747900800&v=beta&t=nkaesaVCTJEsjYWKmDR59CDOwGAvHP9WL3VXR27XVz4",
    linkedin: "https://www.linkedin.com/in/durgesh--tripathi/",
    rating: 5,
  },
  {
    name: "Sagar Chouhan",
    feedback: "Handled every request with professionalism.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQG0axerOgv2oQ/profile-displayphoto-shrink_400_400/B4DZbJNLIaHsAg-/0/1747132397307?e=1752710400&v=beta&t=S-VbQw7vQ2QAyXtl3lSlJcGFbkiP7J1vVEpIVZ0rVPk",
    linkedin: "https://www.linkedin.com/in/sagar172/",
    rating: 5,
  },
  {
    name: "Nitesh Patidar",
    feedback: "Delivers high-quality work consistently.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQHcdlBfZdSBcw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726291638835?e=1747900800&v=beta&t=WiCL15H9OnWfB1SA8kS7um2-MJ2gAjjhzVXwgIIRxrk",
    linkedin: "https://www.linkedin.com/in/nitesh-patidar/",
    rating: 5,
  },
];


const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">My Mentor & Friends Says</h2>
      <span className="section__subtitle">Testimonial & Endorsement</span>

      <div className="infinite-slider-container">
        <div className="infinite-slider">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-text">"{testimonial.feedback}"</p>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} color="#f4c542" />
                ))}
              </div>
              <h4 className="testimonial-author">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin-link"
                >
                  {testimonial.name} <i class="uil uil-linkedin-alt"></i>
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials