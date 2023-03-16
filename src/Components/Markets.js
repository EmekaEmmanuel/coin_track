import React from 'react';
import '../css/Market.css';
import { PropTypes } from 'prop-types';

function Markets(props) {
  const { myMarkets } = props;

  return (
    <div className="app_container">
      <main className="market_main_tag">

        <section className="market_section1">
          <p className="market_font1">BE THE FIRST TO KNOW ABOUT MARKET CHANGES</p>
          <h1 className="market_font2">
            Get an Overview on multi market exchanges
          </h1>
          <p className="market_font3">
            Market multiplicity enables users to manage and trade their assets with greater
            transparency in a
            permissionless environment with a simplified and straightforward interface.
          </p>
        </section>

        <section className="market_section2">
          {myMarkets.map((coin) => (
            <article className="market_article" key={coin.price}>
              <ul className="market_article_box">
                <li className="market_details_item">
                  Price:
                  {coin.price}
                </li>
                <li className="market_details_item">
                  Exchange:
                  {coin.exchange}
                </li>
                <li className="market_details_item">
                  Pair:
                  {coin.pair}
                </li>
                <li className="market_details_item">
                  Pair Price:
                  {coin.pairPrice.toFixed(2)}
                </li>
                <li className="market_details_item">
                  Volume:
                  {coin.volume.toFixed(2)}
                </li>
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

Markets.propTypes = {
  myMarkets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Markets;
