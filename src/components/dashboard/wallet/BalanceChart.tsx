import { Box, Circle } from "@chakra-ui/react";
import { VBAHeading, VBAText } from "components/global";
import ReactApexChart from "react-apexcharts";

function BalanceChart() {
  const data: any = {
    series: [36, 36, 36, 26, 56],
    options: {
      chart: { type: "donut" },
      colors: ["#FF8B00", "#0019F8", "#D00BF0", "#FFFFFF", "#00B6FF"],
      labels: ["BTC", "USDT", "Others", "", "BNB"],
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: { width: 0 },
      plotOptions: {
        pie: {
          donut: {
            size: "90%",
          },
        },
      },
    },
  };

  return (
    <Circle
      position="relative"
      size="170px"
      border="3px solid rgba(0, 182, 255, 0.2)"
      mx={{ base: "auto", md: "initial" }}
    >
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
        width="130%"
      />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <VBAHeading variant="H4">$5000</VBAHeading>
        <VBAText variant="H8">Total Balance</VBAText>
      </Box>
    </Circle>
  );
}

export default BalanceChart;
