import React, { useState } from 'react'

const NavBar = () => {
  const [listNav] = useState(['Home','Services','Companies','Team','Case Study','Contact Us'])
  return (
    <header>
      <div className="logo">
        <img src="/Nav-Logo.png" alt="" />
      </div>
      <nav>
        {
          listNav.map((item, index) => (
            <span key={index}>{item}</span>
          ))
        }
      </nav>
    </header>
  )
}

export default NavBar
