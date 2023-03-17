import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import '../css/Chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function Chart(props) {
  const { myCharts } = props;

  const newMeFunc = () => {
    const arrayPrice = [];
    myCharts?.forEach((element) => {
      arrayPrice.push(element[1]);
    });
    return { arrayPrice };
  };
  const newMe = newMeFunc();

  const options = {
    maintainAspectRatio: false,
    scales: {
    },
    title: {
      display: true,
      text: 'Users Gained between 2016-2020',
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  const data = {
    // eslint-disable-next-line max-len
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets: [
      {
        label: 'Base Point changes',
        data: newMe.arrayPrice,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="app_container">
      <main className="chart_main_tag">

        <section className="chart_section1">
          <p className="chart_font1">LIVE MARKET CHANGES</p>
          <h1 className="chart_font2">Get an Overview on the Live chart</h1>
          <p className="chart_font3">Your favorite place to see moment changes.</p>
        </section>

        <section className="chart_section2">
          <article className="chart_article">

            <h3 className="chart_font4">Live chart</h3>

            <div>
              <Line
                data={data}
                height={400}
                options={options}
              />
            </div>

            <div className="button_box">
              <button className="chart_section3_btn" type="button">1 month</button>
            </div>

          </article>
        </section>
      </main>
    </div>
  );
}

Chart.propTypes = {
  myCharts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Chart;
