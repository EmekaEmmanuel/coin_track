import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../css/Details.css';

function Details(props) {
  const { myCoins } = props;
  const { id } = useParams();

  const coin = (myCoins.filter((coin) => coin.id === id))[0];

  return (
    <div className="app_container">
      <main className="main_tag">

        <section className="details_section1">
          <p className="details_font1">LIVE MARKET CHANGES</p>
          <h1 className="details_font2">
            Get real time details on
            {' '}
            {coin.name}
          </h1>
          <p className="details_font3">Your favorite place to see what&#39;s new.</p>
        </section>

        {coin
          && (
            <section className="details_section2" key={coin.id}>
              <figure className="details_section2_figure">
                <img src={coin.icon} alt="icon" />
              </figure>

              <ul className="details_section_listbox">
                <li>
                  <p>name</p>
                  <p>{coin.name}</p>
                </li>
                <li>
                  <p>symbol</p>
                  <p>{coin.symbol}</p>
                </li>
                <li>
                  <p>rank</p>
                  <p>{coin.rank}</p>
                </li>
                <li>
                  <p>price</p>
                  <p>{(coin.price).toFixed(2)}</p>
                </li>
                <li>
                  <p>priceBtc</p>
                  <p>{(coin.priceBtc).toFixed(2)}</p>
                </li>
                <li>
                  <p>volume</p>
                  <p>{(coin.volume).toFixed(2)}</p>
                </li>
                <li>
                  <p>marketCap</p>
                  <p>{(coin.marketCap).toFixed(2)}</p>
                </li>
                <li>
                  <p>availableSupply</p>
                  <p>{coin.availableSupply}</p>
                </li>
                <li>
                  <p>totalSupply</p>
                  <p>{coin.totalSupply}</p>
                </li>
                <li>
                  <p>priceChange1h</p>
                  <p>{coin.priceChange1h}</p>
                </li>
                <li>
                  <p>priceChange1d</p>
                  <p>{coin.priceChange1d}</p>
                </li>
                <li>
                  <p>priceChange1w</p>
                  <p>{coin.priceChange1w}</p>
                </li>
                <li>
                  <p>websiteUrl</p>
                  <p>{coin.websiteUrl}</p>
                </li>
                <li>
                  <p>twitterUrl</p>
                  <p>{coin.twitterUrl}</p>
                </li>
              </ul>

              <div className="details_button_box">
                <button className="details_chart_btn" type="button">
                  <Link to={`/chart/${coin.id}`} className="nav_font2 td_none">View Live chart </Link>
                </button>

                <button className="details_chart_btn" type="button">
                  <Link to={`/market/${coin.id}`} className="nav_font2 td_none">View Markets </Link>
                </button>
              </div>
            </section>
          )}
      </main>
    </div>
  );
}

Details.propTypes = {
  myCoins: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Details;
