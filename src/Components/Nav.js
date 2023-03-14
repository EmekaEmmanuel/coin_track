import React from 'react';
import '../css/Nav.css';
import { NavLink } from 'react-router-dom';
import closePopUp from '../img/closepopup.png';
import hamburger from '../img/hamburger.png';
import cryptoImage from '../img/crypto_image.png';

function Nav() {
  return (
    <div className="app_container">

      <header className="home_header_box header_line">

        <div className="home_header ">
          <div className="logo_box">
            <figure>
              <img className="logo_img" src={cryptoImage} alt="" />
            </figure>
            <h2 className="nav_font1">monie track</h2>
          </div>

          <nav className="nav_tag">
            <li className="active nav_item"><NavLink to="/" activeClassName="active" className="nav_font2 td_none">Track </NavLink></li>
            <li className="active nav_item"><NavLink to="/" activeClassName="active" className="nav_font2 td_none">Happenings </NavLink></li>
            <li className="active nav_item"><NavLink to="/ChartPage" activeClassName="active" className="nav_font2 td_none">Chart </NavLink></li>
          </nav>

          <div className="notify_box">
            <button type="button">
              {' '}
              <img src={closePopUp} alt="" />
            </button>
            <button type="button">
              {' '}
              <img src={closePopUp} alt="" />
            </button>
          </div>

          <div className="hamburger_container">
            <figure>
              <img src={hamburger} alt="Hamburger_menu" />
            </figure>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Nav;
