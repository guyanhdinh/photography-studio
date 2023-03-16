import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-container">
      <div className="container-top-image"></div>
      <div className="container-top-content">
        <h2>Bringing your story to life with stunning images.</h2>
        <Link to="gallery" className="link-button">
          Explore our work
        </Link>
      </div>
      <div className="container-bottom">
        <img src="./images/home-image2.jpg" alt="" />
        <h2>
          Capture the true essence of your life – the joy, the love and the
          candid moments.
        </h2>
        <p>
          Our approach to photography & videography is to capture the passion
          and joy of your stories. We will document the heart-warming precious
          moments and bring to life your stories of love and laughter.
        </p>
        <Link to="about" className="link-button">
          About Us
        </Link>
        <Link to="contact" className="link-button">
          Contact Us
        </Link>
      </div>
    </main>
  );
}

export default Home;
