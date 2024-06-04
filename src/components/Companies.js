import React from "react";
import "./Companies.css";

export default function Companies() {
  return (
    <div className="Companies" id="companies">
      <div className="Companies-text">
        <span>Companies That Trust Us</span>
      </div>
      <div className="Companies-logos">
        <div className="Logo-Row">
          <div className="logo kings">
            <img src="./images/Viral Kings.png" alt="" />
          </div>
          <div className="logo win holdings">
            <img src="./images/Win Holdings.png" alt="" />
          </div>
          <div className="logo curestown">
            <img src="./images/Curestown.png" alt="" />
          </div>
          <div className="logo lg">
            <img src="./images/LG logo.png" alt="" />
          </div>
          <div className="logo maxceon">
            <img src="./images/Maxceon.png" alt="" />
          </div>
          <div className="logo hustlers">
            <img src="./images/Hustlers Outlet.png" alt="" />
          </div>
        </div>
        <div className="Logo-Row">
          {/* <div className="logo maxceon">
            <img src="./images/./images/./images/Maxceon.png" alt="" />
          </div> */}
          {/* <div className="logo">
            <img src="./images/./images/ZentroMediaa.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}