import React from "react";
import "./style.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet, MdLogout } from "react-icons/md";
function Click() {
  var navbar = document.querySelector(".main-nav ul");
  navbar.classList.toggle("active");
}

function Header() {
  return (
    <header className="main-header">
      <a href="index.html" className="brand-logo">
        <div className="brand-logo-name">
          <h3>Density</h3>
        </div>
      </a>

      <div className="temp">
        <h5 id="tmp2">Onboarding</h5>
      </div>
      <div className="temp">
        <h5 id="tmp2">Deposit</h5>
      </div>
      <div className="temp">
        <h5 id="tmp2">Withdraw</h5>
      </div>
      <div className="temp">
        <h5 id="tmp2">Adjust Margin</h5>
      </div>

      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className="main-nav">
        <ul>
          <h3 id="tmp">
            <MdOutlineAccountBalanceWallet />
          </h3>
          <h3 id="tmp">
            <FaUserCircle />
          </h3>
          <h3 id="tmp">
            <IoIosNotificationsOutline />
          </h3>
          <h3 id="tmp">
            <MdLogout />
          </h3>
          {/* <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Event Highlights</a>
          </li>
          <li>
            <a href="#">Collaboration</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
