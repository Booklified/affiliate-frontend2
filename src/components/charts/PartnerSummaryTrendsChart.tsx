import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   interaction: {
//     mode: "index",
//     intersect: false,
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: "Partner Summary Trends",
//     },
//   },
//   scales: {
//     y: {
//       type: "linear",
//       display: true,
//       position: "left",
//     },
//     y1: {
//       type: "linear",
//       display: true,
//       position: "right",
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },

    tooltips: {
      position: "nearest",
      mode: "index",
      intersect: false,
      yPadding: 10,
      xPadding: 10,
      caretSize: 4,
      backgroundColor: "rgba(72, 241, 12, 1)",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 4,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};
const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",

  "45",
  "46",
  "47",
  "48",
  "49",

  "50",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        25, 25, 25, 25, 15, 30, 28, 29, 31, 20, 15, 15, 15, 17, 18, 19, 22, 21,
        20, 18, 22, 19, 24, 21, 20, 23, 22, 25, 24, 26, 24, 28, 26, 20, 20, 18,
        16, 17, 16, 15, 14, 12, 13, 10, 10, 8, 13, 12, 10, 5,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      type: "line",
      borderCapStyle: "butt",
      clip: {
        left: 10,
        top: 5,
        right: 3,
        bottom: 6,
      },
      // remove points
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHitRadius: 0,

      // change tension
      lineTension: 0,
    },
    {
      label: "Dataset 2",
      data: [
        15, 20, 20, 22, 17, 18, 22, 25, 35, 20, 17, 12, 12, 13, 14, 15, 16, 17,
        16, 18, 18, 17, 20, 21, 20, 20, 22, 20, 18, 14, 15, 14, 13, 12, 11, 10,
        8, 7, 6, 5, 4, 2, 3, 4, 5, 6, 7, 7, 6, 5,
      ],
      borderColor: "rgb(255, 159, 64)",
      backgroundColor: "rgba(255, 159, 64, 0.5)",
      pointRadius: 0,
    },
    {
      label: "Dataset 3",
      data: [
        20, 20, 20, 28, 29, 30, 30, 29, 28, 28, 15, 25, 25, 24, 24, 23, 22, 21,
        20, 18, 22, 15, 8, 8, 6, 4, 5, 6, 7, 6, 5, 6, 6, 7, 8, 10, 9, 9, 9, 5,
        4, 2, 3, 1, 1, 6, 8, 8, 9, 5,
      ],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      pointRadius: 0,
    },
  ],
};

export function PartnerSummaryTrendsChart() {
  return (
    <Line
      options={options}
      data={data as any}
      height={"200px"}
      width={"auto"}
    />
  );
}

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   interaction: {
//     mode: 'index' as const,
//     intersect: false,
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart - Multi Axis',
//     },
//   },
//   scales: {
//     y: {
//       type: 'linear' as const,
//       display: true,
//       position: 'left' as const,
//     },
//     y1: {
//       type: 'linear' as const,
//       display: true,
//       position: 'right' as const,
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       yAxisID: 'y',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       yAxisID: 'y1',
//     },
//   ],
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }
