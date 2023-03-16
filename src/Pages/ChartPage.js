import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCharts } from '../redux/Chart/chartSlice';
import Chart from '../Components/Chart';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

function ChartPage() {
  const myCharts = useSelector((state) => state.chart.charts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchCharts(id));
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch, id]);

  return (
    <div className="app_container">
      <Nav />
      <Chart myCharts={myCharts} />
      <Footer />
    </div>
  );
}

export default ChartPage;
