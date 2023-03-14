import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/Coin/coinSlice';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Track from '../Components/Track';

function HomePage() {
  const myCoins = useSelector((state) => state.coin.coins);
  // console.log(myCoins);
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active && myCoins.length === 0) {
        dispatch(fetchCoins());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, myCoins]);

  return (
    <div className="app_container">
      <Nav />
      <Track myCoins={myCoins} />
      <Footer />
    </div>
  );
}

export default HomePage;
