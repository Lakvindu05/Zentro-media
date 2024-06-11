import React, { useEffect, useRef } from 'react';

const Container = () => {
  const cardsRef = useRef([]);// Create a reference to store card elements

  useEffect(() => {
    // Create an IntersectionObserver instance to observe when the card elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add the 'animate' class to the card when it intersects (comes into view)
          }
        });
      },
      {
        threshold: 0.1, // Trigger the animation when the card is 40% in the viewport
      }
    );

    // Observe each card element using the observer
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup function to unobserve the card elements when the component unmounts
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="container">
      <div className="content1">
        <div className="intro">
          <span id="text1">Let's Build Your Digital Empire Together <br/></span>
          <span id="text2">Supercharge Your Business With High-Impact Social Media Advertising. <br />
            Maximise ROI, Skyrocket sales. Unleash Your Business Potential.</span>
        </div>
        <img src="./Container-img.png" alt="Business Growth" />
      </div>
      <div className="content2">
        <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
          <span id="number"> 5 </span>
          <span id="title">Clients Helped</span>
        </div>
        <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
          <span id="number"> 2+ </span>
          <span id="title">Years Experience</span>
        </div>
        <div className="card" ref={(el) => (cardsRef.current[2] = el)}>
          <span id="number"> 3 </span>
          <span id="title">Services Offered</span>
        </div>
      </div>
    </section>
  );
};

export default Container;
