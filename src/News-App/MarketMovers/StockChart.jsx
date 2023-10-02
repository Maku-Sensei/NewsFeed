import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import getTime from "../../general methods/getTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false, // Set this to false to control the chart's size
};

const StockChart = ({ dataChart }) => {
  const open = dataChart[dataChart.length - 1].open;
  const close = dataChart[0].close;
  const openTime = getTime(dataChart[dataChart.length - 1].date);
  const closeTime = getTime(dataChart[0].date);

  dataChart.shift();
  dataChart.pop();
  const lastPrices = [];
  const times = [];
  dataChart.forEach((object) => {
    if (object.last !== null) {
      lastPrices.push(object.last);
      const time = getTime(object.date);
      times.push(time);
    }
  });
  times.unshift(openTime);
  times.push(closeTime);
  lastPrices.unshift(open);
  lastPrices.push(close);

  //Settings for Chart.js
  const data = {
    labels: times,
    datasets: [
      {
        data: lastPrices,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
