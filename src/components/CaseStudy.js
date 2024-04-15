import React from 'react';
import './CaseStudy.css';

export default function CaseStudy() {
  const openYoutubeInNewTab = () => {
    window.open('http://case.zentromedia.com/', '_blank');
  };

  return (
    <section className="case-study">
      <h2>FREE CASE STUDY:</h2>
      <div className="main-text">
        <p className="main-text">
          "Driving the Future of Car Dealerships and Ecommerce Businesses: Our Agency's Aggressive Scaling Strategies"
        </p>
      </div>
      <div className="content">
        <div className="image">
          <img src="new new gif.jpg" alt="Case Study" />
        </div>
        <div className="text">
          <p>Unveiling the Secrets Behind Our Unprecedented ROI Generation for Clients.</p>
          <p>Unlocking God-Like Omni-Presence: The Blueprint for Dominating Your Competition.</p>
          <p>The Critical First Step: Sealing the Leaks in Your Sales Process to Supercharge Your Traffic.</p>
          <button onClick={openYoutubeInNewTab}>READ THE FREE CASE STUDY</button>
        </div>
      </div>
    </section>
  );
}
