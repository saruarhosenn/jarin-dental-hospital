import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero-section">
      <div className="container">
        <div className="hero-title">
          <h1 class="size-50 text-white mb-4">
            Take care of teeth while having teeth.
            Healthy teeth are essential for a healthy life.
          </h1>
          <Link to="/services" className="px-30 py-13 rounded-pill bg-white t-color-23 fw-500">Services →</Link>
        </div>
      </div>
		</section>
	);
};

export default Hero;