"use client";

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
import Chart from "react-apexcharts";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset",
      borderColor: "#1967d2",
      backgroundColor: "#1967d2",
      data: [196, 132, 215, 362, 210, 252],
      fill: false,
    },
  ],
};

const CampaignsChart = () => {
  return (
    <div className="h-fit w-full aspect-[1493/488] xl:mex-h-[488px] ">
      {/* <Line options={options} data={data} height={"100%"} /> */}
      <Chart
        options={{
          legend: {
            show: false,
          },
          chart: {
            toolbar: {
              show: false,
            },
            height: 200,
            // width: "100%",
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [5, 7, 5],
            curve: "straight",
            // dashArray: [0, 8, 5],
          },

          // legend: {
          //   tooltipHoverFormatter: function (val, opts) {
          //     return (
          //       val +
          //       " - <strong>" +
          //       opts.w.globals.series[opts.seriesIndex][
          //         opts.dataPointIndex
          //       ] +
          //       "</strong>"
          //     );
          //   },
          // },

          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  },
                },
              },
            ],
          },
          grid: {
            // borderColor: "#f1f1f1",
            show: false,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          colors: ["#FB7E10", "#FF3B2E", "#D3FAD6"],
        }}
        series={[
          {
            name: "John",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
          },
        ]}
        type="line"
        height={"100%"}
      />
    </div>
  );
};

export default CampaignsChart;
