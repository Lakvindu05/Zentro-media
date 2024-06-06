import React from 'react'

const Container = () => {
  return (
    <section className="container">
      <div className="content1">
        <div className="intro">
          <span id="text1">Let's Build Your Digital Empire Together <br/></span>
          <span id="text2">Supercharge Your Business With High-Impact Social Media Advertising. <br />
            Maximise ROI, Skyrocket sales. Unleash Your Business Potential.</span>
        </div>
        <img src="/Container-img.png" alt="" />
      </div>
      <div className="content2">
        <div className="card">
          <span id="number"> 5 </span>
          <span id="title">Clients Helped</span>
        </div>
        <div className="card">
          <span id="number"> 2+ </span>
          <span id="title">Years Experience</span>
        </div>
        <div className="card">
          <span id="number"> 3 </span>
          <span id="title">Services Offered</span>
        </div>
      </div>
    </section>
  )
}

export default Container
