import { AreaChart, BarChart, CompositeChart } from "@mantine/charts";
import { barChartData, data } from "./data";

const MainDashbaordLayout = () => {
  return (
    <div className="w-full flex flex-wrap flex-row">
      <div className="w-full md:w-1/2">
        <AreaChart
          h={300}
          data={data}
          dataKey="date"
          type="stacked"
          tooltipAnimationDuration={200}
          series={[
            { name: "Apples", color: "indigo.6" },
            { name: "Oranges", color: "blue.6" },
            { name: "Tomatoes", color: "teal.6" },
          ]}
          className="w-[90%]"
        />
      </div>

      <div className="w-full md:w-1/2">
        <CompositeChart
          h={300}
          data={data}
          dataKey="date"
          maxBarWidth={30}
          series={[
            { name: "Tomatoes", color: "rgba(18, 120, 255, 0.2)", type: "bar" },
            { name: "Apples", color: "red.8", type: "line" },
            { name: "Oranges", color: "yellow.8", type: "area" },
          ]}
          tooltipAnimationDuration={200}
          curveType="linear"
          className="w-[90%]"
        />
      </div>

      <div className="w-full md:w-1/2 mt-16">
        <BarChart
          h={300}
          data={barChartData}
          dataKey="month"
          series={[
            { name: "Smartphones", color: "violet.6" },
            { name: "Laptops", color: "blue.6" },
            { name: "Tablets", color: "teal.6" },
          ]}
          tooltipAnimationDuration={200}
          tickLine="y"
          className="w-[90%]"
        />
      </div>
    </div>
  );
};

export default MainDashbaordLayout;
