import React from "react";

const Services = () => {
  return (
    <section className="services">
      <div className="services-left">
        <span id="heading1">What We Offer <br /></span>
        <span id="heading2">PAID ADVERTISING</span>
        <p>Ads. Nothing but ads.</p>
        <p>
          Focused. Exceptional. Effective. We specialize. Our laser-like focus
          sets us apart, enabling us to outperform all others. Seeking an agency
          that offers a one-size-fits-all approach? That's not us. We're here to
          make a true impact, not just provide an array of services that won't
          move the needle forward.
        </p>
        <p>
          However, if you're looking for an agency that provides clear,
          immediate access to vital data - expenditure, revenue, and net profit
          - all just two clicks away, then we're the perfect match for you.
        </p>
      </div>
      <div className="services-right">
        <span id="heading3">MASTERY DEMANDS FOCUS SO.... <br /></span>
        <span id="heading4">
          We don't offer any other services
          except for paid advertising...
        </span>

        <div className="service-container">

          <div className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <span id="title">WEB DESIGN</span>
              </div>
              <div className="service-card-back">
                <p>Details about Service 1.</p>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <span id="title">CONTENT CREATION</span>
              </div>
              <div className="service-card-back">
                <p>Details about Service 2.</p>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <span id="title">EMAIL MARKETING</span>
              </div>
              <div className="service-card-back">
                <p>Details about Service 3.</p>
              </div>
            </div>
          </div>

          <div className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <span id="title">SOCIAL MEDIA MANAGEMENT & GROWTH</span>
              </div>
              <div className="service-card-back">
                <p>Details about Service 3.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
