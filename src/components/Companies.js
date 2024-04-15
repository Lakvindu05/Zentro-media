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
            <img src="Viral Kings.png" alt="" />
          </div>
          <div className="logo win holdings">
            <img src="Win Holdings.png" alt="" />
          </div>
          <div className="logo curestown">
            <img src="Curestown.png" alt="" />
          </div>
          <div className="logo lg">
            <img src="LG logo.png" alt="" />
          </div>
          <div className="logo maxceon">
            <img src="Maxceon.png" alt="" />
          </div>
          <div className="logo hustlers">
            <img src="Hustlers Outlet.png" alt="" />
          </div>
        </div>
        <div className="Logo-Row">
          {/* <div className="logo maxceon">
            <img src="Maxceon.png" alt="" />
          </div> */}
          {/* <div className="logo">
            <img src="ZentroMediaa.png" alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}