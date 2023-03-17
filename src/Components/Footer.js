import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="app_container">
      <footer className="home_footer">

        <article className="home_footer_article">
          <ul>
            <p className="home_footer_paragraph">Company</p>
            <li className="home_footer_list">About</li>
            <li className="home_footer_list">Terms of Use</li>
            <li className="home_footer_list">Careers</li>
            <li className="home_footer_list">Privacy Policy</li>
          </ul>
          <ul>
            <p className="home_footer_paragraph">Trade</p>
            <li className="home_footer_list">About</li>
            <li className="home_footer_list">Terms of Use</li>
            <li className="home_footer_list">Careers</li>
            <li className="home_footer_list">Privacy Policy</li>
          </ul>
          <ul>
            <p className="home_footer_paragraph">Help</p>
            <li className="home_footer_list">About</li>
            <li className="home_footer_list">Terms of Use</li>
            <li className="home_footer_list">Careers</li>
            <li className="home_footer_list">Privacy Policy</li>
          </ul>
          <ul>
            <p className="home_footer_paragraph">Products</p>
            <li className="home_footer_list">About</li>
            <li className="home_footer_list">Terms of Use</li>
            <li className="home_footer_list">Careers</li>
            <li className="home_footer_list">Privacy Policy</li>
          </ul>
        </article>

        <div className="footer_copyright">
          &#169; 2022 glorch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
