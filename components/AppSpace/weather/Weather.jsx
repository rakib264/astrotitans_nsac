import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MarsWeather = () => {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    setIsMounted(true);
  });

  const isRtl = false;
  const isDark = theme === "dark";

  // areaChartOptions
  const areaChart = {
    series: [
      {
        name: "Pressure",
        data: [751, 749, 750, 755, 747, 749, 747, 750, 752, 753, 753, 753],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#805dca"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        axisBorder: {
          color: isDark ? "#191e3a" : "#e0e6ed",
        },
      },
      yaxis: {
        opposite: isRtl ? true : false,
        labels: {
          offsetX: isRtl ? -40 : 0,
        },
      },
      labels: [
        "Aug. 31",
        "Aug. 30",
        "Aug. 29",
        "Aug. 28",
        "Aug. 27",
        "Aug. 26",
        "Aug. 25",
        "Aug. 24",
        "Aug. 23",
        "Aug. 22",
        "Aug. 21",
        "Aug. 20",
      ],
      legend: {
        horizontalAlign: "left",
      },
      grid: {
        borderColor: isDark ? "#191E3A" : "#E0E6ED",
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
      },
    },
  };

  return (
    <div className="w-full">
      <div className="panel w-full">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="text-lg font-semibold dark:text-white">
            Mars Pressuse with respect to sols(For 2023)
          </h5>
        </div>
        <div className="w-max-7xl mb-5">
          {isMounted && (
            <ReactApexChart
              series={areaChart.series}
              options={areaChart.options}
              className="rounded-lg bg-white dark:bg-black"
              type="area"
              height={500}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MarsWeather;
