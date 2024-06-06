import React, { useEffect, useRef } from 'react';

const Container = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.5, // Trigger the animation when the card is 60% in the viewport
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

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
        <img src="/Container-img.png" alt="Business Growth" />
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
