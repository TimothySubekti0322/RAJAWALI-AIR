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
import { faker } from "@faker-js/faker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sales Add Ons Baggage",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },

    {
      label: "Sales Add Ons Meals",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Diagram = () => {
  return (
    <div className="rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <p className="font-['Roboto'] font-semibold text-black">
          Monthly Ticket Sold
        </p>
        <div className="inline-flex items-center gap-2">
          <p className="font-['Roboto'] text-gray-500">Year</p>
          <p className="font-['Roboto'] font-semibold text-black">2024</p>
          <button className="">
          <ExpandMoreIcon className="text-blue-500" />
          </button>
        </div>
      </div>

      <Line options={options} data={data} />
    </div>
  );
};

export default Diagram;
