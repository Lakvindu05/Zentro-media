import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: "Ryan Gunathilaka", img: "Ryan.jpg", facebook: "#", github: "#", linkedin: "#" },
    { name: "Lassen Wijekoon", img: "Lassen.jpg", facebook: "#", github: "#", linkedin: "#" },
    { name: "Krishan Shalitha", img: "Krishan.jpg", facebook: "#", github: "#", linkedin: "#" },
    { name: "Lakvindu Siriwardena", img: "Krishan.jpg", facebook: "#", github: "#", linkedin: "#" },
    { name: "Gagana Kalsara", img: "Krishan.jpg", facebook: "#", github: "#", linkedin: "#" },
    { name: "Chamara Rajapaksha", img: "Krishan.jpg", facebook: "#", github: "#", linkedin: "#" }
  ];

  return (
    <section className="Team">
      <span id="heading2">Our Team</span>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card-inner">
              <div className="team-card-front">
                <img src={member.img} alt={member.name} />
                <h2>{member.name}</h2>
              </div>
              <div className="team-card-back">
                <h2>{member.name}</h2>
                <div className="social-icons">
                  <a href={member.facebook}><i className="fa-brands fa-facebook"></i></a>
                  <a href={member.github}><i className="fa-brands fa-github"></i></a>
                  <a href={member.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
