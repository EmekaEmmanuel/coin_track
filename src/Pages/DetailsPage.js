import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

function DetailsPage() {
  const myCoins = useSelector((state) => state.coin.coins);
  const { id } = useParams();
  const coin = (myCoins.filter((coin) => coin.id === id))[0];

  return (
    <div className="app_container">
      <Nav />
      <Details coin={coin} />
      <Footer />
    </div>
  );
}

export default DetailsPage;
