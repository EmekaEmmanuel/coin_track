import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../css/Track.css';

function Track(props) {
  const { myCoins } = props;
  const [inputCoin, setInputCoin] = useState('');

  const filteredCoins = myCoins.filter(
    (coin) => coin.name.toLowerCase().includes(inputCoin.toLowerCase())
      || coin.symbol.toLowerCase().includes(inputCoin.toLowerCase()),
  );

  return (
    <div className="app_container">
      <main className="main_tag">
        <section className="home_section1">
          <p className="home_font1">THE NEW STANDARD DECENTRALIZED TRACKING PLATFORM</p>
          <h1 className="home_font2">Track decentralized between blockchains</h1>
          <p className="home_font3">
            Swap all assets frictionless in a decentralized manner, earn yield on your native
            coins and manage
            your portfolio while you have full control of your keys.
          </p>
        </section>

        <section className="home_section2">
          <input type="text" placeholder="Enter Coin name or symbol" onChange={(e) => setInputCoin(e.target.value)} />
        </section>

        <section className="home_section3">

          {filteredCoins.map((coin) => (
            <article className="coin_article" key={coin.name}>
              <figure className="coin_figure">
                <img className="coin_img" src={coin.icon} alt="" />
              </figure>
              <div className="home_coin_details">
                <ul className="coin_details_box">
                  <li className="coin_details_item">
                    Rank:
                    {coin.rank}
                  </li>
                  <li className="coin_details_item">{coin.name}</li>
                  <li className="coin_details_item">{coin.symbol}</li>
                  <li className="coin_details_item">
                    $
                    {coin.price.toFixed(2)}
                  </li>
                  <button type="button" className="home_section3_btn">
                    <Link to={`/details/${coin.id}`} className="td_none">Track</Link>
                  </button>
                </ul>
              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}

Track.propTypes = {
  myCoins: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Track;
