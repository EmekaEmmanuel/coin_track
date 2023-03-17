import React from 'react';
import '../css/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import cryptoImage from '../img/crypto_image.png';
import mic from '../img/mic_icon.png';
import settingIcon from '../img/setting_icon.png';

function Nav() {
  return (
    <div className="app_container">

      <header className="home_header_box header_line">

        <div className="home_header ">
          <div className="logo_box">
            <figure>
              <Link to="/" className="mobile_disp nav_font2 td_none">
                <button className=" nav_font2 td_none" type="button">&#60;</button>
              </Link>
              <NavLink to="/" activeClassName="active" className="web_disp nav_font2 td_none">
                {' '}
                <img className="logo_img" src={cryptoImage} alt="" />
                {' '}
              </NavLink>

            </figure>
            <h2 className="nav_font1">glorch</h2>
          </div>

          <nav className="nav_tag">
            <li className="disp_none nav_item "><NavLink to="/" activeClassName="active" className="nav_font2 td_none">Track </NavLink></li>
            <li className="disp_none nav_item"><NavLink to="*" activeClassName="active" className="nav_font2 td_none">Happenings </NavLink></li>
            <li className="disp_none nav_item"><NavLink to="*" activeClassName="active" className="nav_font2 td_none">Personal </NavLink></li>
          </nav>

          <div className="notify_box">
            <button type="button">
              {' '}
              <NavLink to="*" activeClassName="active" className="nav_font2 td_none">
                <img src={mic} alt="" />
                {' '}
              </NavLink>
            </button>
            <button type="button">
              {' '}
              <NavLink to="*" activeClassName="active" className="nav_font2 td_none"><img src={settingIcon} alt="" /></NavLink>
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Nav;
