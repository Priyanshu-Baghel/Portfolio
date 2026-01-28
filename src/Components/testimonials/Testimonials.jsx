import React from "react";
import "./testimonials.css";
import { FaStar } from "react-icons/fa";

// Using DiceBear "Adventurer" style which mimics the Ghibli/Illustrative style
const getAvatar = (seed) =>
  `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

const testimonials = [
  {
    name: "Atikesh Chouhan",
    feedback: "Great experience! Highly recommend.",
    // Male Ghibli-style Avatar
    image: getAvatar("Felix"),
    linkedin: "https://www.linkedin.com/in/atikeshchouhan3ba237/",
    rating: 5,
  },
  {
    name: "Anubha Mahajan",
    feedback: "Amazing service and very professional.",
    // Female Ghibli-style Avatar
    image: getAvatar("Sophie"),
    linkedin: "https://www.linkedin.com/in/anubha-mahajan/",
    rating: 4,
  },
  {
    name: "Alina Khan",
    feedback: "Quick, efficient, and friendly.",
    // Female Ghibli-style Avatar
    image: getAvatar("Abby"),
    linkedin: "https://www.linkedin.com/in/alina-khan-346939248/",
    rating: 5,
  },
  {
    name: "Ganga Prajapat",
    feedback: "Very detail-oriented and reliable.",
    // Female Ghibli-style Avatar
    image: getAvatar("Eliza"),
    linkedin: "https://www.linkedin.com/in/gangaprajapat/",
    rating: 4,
  },
  {
    name: "Raksha Kale",
    feedback: "A pleasure to work with—superb communication.",
    // Female Ghibli-style Avatar
    image: getAvatar("Zoey"),
    linkedin: "https://www.linkedin.com/in/rakshakale/",
    rating: 5,
  },
  {
    name: "Durgesh Tripathi",
    feedback: "Truly dedicated and result-oriented professional.",
    // Male Ghibli-style Avatar
    image: getAvatar("Brian"),
    linkedin: "https://www.linkedin.com/in/durgesh--tripathi/",
    rating: 5,
  },
  {
    name: "Sagar Chouhan",
    feedback: "Handled every request with professionalism.",
    // Male Ghibli-style Avatar
    image: getAvatar("Christopher"),
    linkedin: "https://www.linkedin.com/in/sagar172/",
    rating: 5,
  },
  {
    name: "Nitesh Patidar",
    feedback: "Delivers high-quality work consistently.",
    // Male Ghibli-style Avatar
    image: getAvatar("Avery"),
    linkedin: "https://www.linkedin.com/in/nitesh-patidar/",
    rating: 5,
  },
];

const Collaborations = () => {
  return (
    <section className="testimonial container section" id="collaborations">
      <h2 className="section__title">My Collaborations & Friends Says</h2>
      <span className="section__subtitle">
        Reflections on my work ethic and technical growth from mentors and
        peers.
      </span>

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
                  {testimonial.name} <i className="uil uil-linkedin-alt"></i>
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
