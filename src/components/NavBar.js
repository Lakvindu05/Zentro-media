import React, { useState } from 'react'

const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <img src="/Nav-Logo.png" alt="" />
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Companies</a>
        <a href="#">Team</a>
        <a href="#">Contact Us</a>
        <a href="#">Case Study</a>
      </nav>
    </header>
  )
}

export default NavBar
