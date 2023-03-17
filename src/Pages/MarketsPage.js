import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMarkets } from '../redux/Market/marketSlice';
import Markets from '../Components/Markets';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

function MarketsPage() {
  const myMarkets = useSelector((state) => state.market.markets);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchMarkets(id));
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, id]);

  return (
    <div className="app_container">
      <Nav />
      <Markets myMarkets={myMarkets} />
      <Footer />
    </div>
  );
}

export default MarketsPage;
