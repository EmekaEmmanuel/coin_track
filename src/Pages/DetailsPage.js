import React from 'react';
import { useSelector } from 'react-redux';
import Details from '../Components/Details';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

function DetailsPage() {
  const myCoins = useSelector((state) => state.coin.coins);

  return (
    <div className="app_container">
      <Nav />
      <Details myCoins={myCoins} />
      <Footer />
    </div>
  );
}

export default DetailsPage;
