import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="ContactBox">
      <div className="calendly-container">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/zentromedia/15min-demo-call"
          style={{ minWidth: "320px", height: "630px" }}
        ></div>
      </div>
      <div className="contactinsidebox">
        <div className="tiles-Text">
          <span id="Title1">Schedule Your Call</span>
          <br />
          <span id="Title2">Free 15-Minute Demo Call</span>
        </div>

        <p className="description1">
          By the end of this Audit call, you will have a clear <br />{" "}
          understanding of the next steps you can take for your <br /> business
          to start generating consistent and reliable results <br /> online with
          Funnels & Paid Advertising.
          <br />
          <br /> Find a time on Nethsara’s calendar to schedule your call today{" "}
          <br /> and we look forward to speaking to you soon!{" "}
        </p>
        <p className="Title3">THIS AUDIT CALL IS PERFECT FOR:</p>
        <div>
          <ul className="nottodolist">
            <div>
              <img src="./images/correct.png" alt="" />
              <li>
                Businesses looking to convert their current website into a{" "}
                <br />{" "}
                <span className="bold-texts">
                  high quality & streamlined funnel format.
                </span>
              </li>
            </div>
            <div>
              <img src="./images/correct.png" alt="" />
              <li>
                Businesses looking to take their offline business{" "}
                <span className="bold-texts">online.</span>
              </li>
            </div>
            <div>
              <img src="./images/correct.png" alt="" />
              <li>
                Businesses looking to understand their{" "}
                <span className="bold-texts">
                  increased revenue
                  <br /> potential{" "}
                </span>
                with funnels & conversion rate optimization.
              </li>
            </div>
            <div>
              <img src="./images/correct.png" alt="" />
              <li>
                Businesses looking to
                <span className="bold-texts">
                  {" "}
                  maximise their conversion rates
                </span>{" "}
                & <br />
                <span className="bold-texts">average order value.</span>
              </li>
            </div>
            <div>
              <img src="./images/correct.png" alt="" />
              <li>
                Businesses looking for a reliable agency that can{" "}
                <span className="bold-texts">
                  {" "}
                  make their
                  <br />
                  company a priority.
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
