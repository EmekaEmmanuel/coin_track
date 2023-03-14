import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  // Tooltip,
  // Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import '../css/Chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  // Tooltip,
  // Legend
);

function Chart(props) {
  const { myCharts } = props;
  console.log(myCharts);

  // var data = {
  //   labels: chart?.coins?.map(x => x.name),
  //   datasets: [{
  //     label: `${chart?.coins?.length} Coins Available`,
  //     data: chart?.coins?.map(x => x.price),
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  const options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Popularity of Sales',
        data: [3, 2, 4, 5, 6],
      },
      {
        label: 'Popularity of Sales',
        data: [3, 2, 4, 5, 6],
      },
    ],
  };

  return (
    <div className="app_container">
      <main className="chart_main_tag">

        <section className="chart_section1">
          <p className="chart_font1">LIVE MARKET CHANGES</p>
          <h1 className="chart_font2">Get an Overview on the Bitcoin chart</h1>
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
              <button className="chart_section3_btn" type="button">1hr</button>
              <button className="chart_section3_btn" type="button">24hr</button>
              <button className="chart_section3_btn" type="button">1 week</button>
              <button className="chart_section3_btn" type="button">1 month</button>
              <button className="chart_section3_btn" type="button">1 year</button>
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
