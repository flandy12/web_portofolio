import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {

  const dataDiagram = {
    '2023': [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
    '2024': [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 594]
  }

  React.useEffect(() => {
    var config_bar = {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#3182ce",
              borderColor: "#3182ce",
              data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970,6313, 3595, 9207, 5945],
              fill: false,
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: "#edf2f7",
              borderColor: "#edf2f7",
              data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343,9404, 9280, 9287, 8689],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };

    var ctx = document.getElementById("line-chart2").getContext("2d");
    window.myLine = new Chart(ctx, config_bar);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1">
       
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                    Overview
                </h6>
                <h2 className="text-white text-xl font-semibold">Dashboard Penjualan Tahunan</h2>
                </div>
            </div>
            </div>
            <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
                <canvas id="line-chart2"></canvas>
            </div>
            </div>
        </div>
      </div>

      <div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table id="data-table" className="w-full">
              <thead>
                  <tr>
                      <th rowspan="2" className="border border-gray-700 px-4 py-2">Tahun</th>
                      <th colspan="12" className="border border-gray-700 px-4 py-2">Bulan</th>
                  </tr>
                  <tr>
                    <th className="border border-gray-700 px-4 py-2">Januari</th>
                    <th className="border border-gray-700 px-4 py-2">Februari</th>
                    <th className="border border-gray-700 px-4 py-2">Maret</th>
                    <th className="border border-gray-700 px-4 py-2">April</th>
                    <th className="border border-gray-700 px-4 py-2">Mei</th>
                    <th className="border border-gray-700 px-4 py-2">Juni</th>
                    <th className="border border-gray-700 px-4 py-2">Juli</th>
                    <th className="border border-gray-700 px-4 py-2">Agustus</th>
                    <th className="border border-gray-700 px-4 py-2">September</th>
                    <th className="border border-gray-700 px-4 py-2">Oktober</th>
                    <th className="border border-gray-700 px-4 py-2">November</th>
                    <th className="border border-gray-700 px-4 py-2">Desember</th>
                  </tr>
              </thead>            
              <tbody>
                {Object.entries(dataDiagram).map(([year, data]) => (
                  <tr key={year} className="gap-5">
                    <td rowSpan={1} className="border border-gray-700 px-4 py-2 text-center">
                      {year}
                    </td>
                    {data.map((value, index) => (
                      <td key={`${year}-${index}`} className="border border-gray-700 px-4 py-2 text-center">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot id="totalRow"></tfoot>
          </table>
        </div>

      </div>
    </>
  );
}