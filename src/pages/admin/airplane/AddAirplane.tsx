import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TextInput from "../../../components/admin/input/textInput";
import { useState } from "react";
import NumberInput from "../../../components/admin/input/numberInput";
import axios from "axios";
import toast from "react-hot-toast";
import API_URL from "../../../assets/static/API";

const apiURL = `${API_URL}/v1/airplanes`;

const breadcrumbs = [
  <Typography key="1" color="text.primary">
    Dashboard
  </Typography>,
  <Typography key="2" color="text.primary">
    Airplane
  </Typography>,
  <Typography key="3" color="text.primary">
    Add
  </Typography>,
];

const AddAirplane = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    airplaneCode: "",
    economySeats: 0,
    businessSeats: 0,
    firstSeats: 0,
    economySeatsPerCol: 0,
    businessSeatsPerCol: 0,
    firstSeatsPerCol: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(apiURL, form);
      if (response.data.success) {
        toast.success("Data added successfully");
        setLoading(false);
        setForm({
          airplaneCode: "",
          economySeats: 0,
          businessSeats: 0,
          firstSeats: 0,
          economySeatsPerCol: 0,
          businessSeatsPerCol: 0,
          firstSeatsPerCol: 0,
        });
        setTimeout(() => {
          window.location.href = "/dashboard/airplane";
        }, 1000); // Delayed by 1000 milliseconds (1 seconds)
      }
    } catch (error) {
      console.log(error);
      setTimeout(toast.error("Something when wrong"), 100);
    }
  };

  return (
    <Layout>
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">Add Airplane</p>
        <div className="flex items-center justify-between mt-2 ">
          {/* BreadCrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <section className="w-full pt-6 mt-8 border-t-4">
          <div className="flex flex-col w-full gap-y-6">
            <TextInput
              title="Airplane Code"
              inputID="airplaneCode"
              placeholder="Enter Airplane Code"
              onChange={handleInputChange}
              value={form.airplaneCode}
              description="Airplane Code must be unique"
            />

            <NumberInput
              title="Economy Seat"
              inputID="economySeats"
              placeholder="Enter Economy Seat"
              onChange={handleInputChange}
              value={form.economySeats}
              description="Number Input Only"
            />

            <NumberInput
              title="Bussines Seat"
              inputID="businessSeats"
              placeholder="Enter Bussines Seat"
              onChange={handleInputChange}
              value={form.businessSeats}
              description="Number Input Only"
            />

            <NumberInput
              title="First Class Seat"
              inputID="firstSeats"
              placeholder="Enter First Class Seat"
              onChange={handleInputChange}
              value={form.firstSeats}
              description="Number Input Only"
            />

            <NumberInput
              title="Economy Seat Per Column"
              inputID="economySeatsPerCol"
              placeholder="Enter Economy Seat Per Column"
              onChange={handleInputChange}
              value={form.economySeatsPerCol}
              description="Number Input Only"
            />

            <NumberInput
              title="Business Seat Per Column"
              inputID="businessSeatsPerCol"
              placeholder="Enter Business Seat per column"
              onChange={handleInputChange}
              value={form.businessSeatsPerCol}
              description="Number Input Only"
            />

            <NumberInput
              title="First Class Seat Per Column"
              inputID="firstSeatsPerCol"
              placeholder="Enter First Class Seat per column"
              onChange={handleInputChange}
              value={form.firstSeatsPerCol}
              description="Number Input Only"
            />
          </div>

          <div className="flex items-center mt-4 gap-x-4">
            {/* Cancel Button */}
            <button
              className="px-4 py-2 rounded-lg bg-[#CB3A31] hover:bg-[#A91810] text-white font-semibold text-xl"
              onClick={() => {
                window.location.href = "/dashboard/airplane/add";
              }}
            >
              cancel
            </button>

            {/* Submit Button */}
            <button
              className="px-4 py-2 rounded-lg bg-[#1E90FF] hover:bg-[#0C70DD] text-white font-semibold text-xl"
              onClick={handleSubmit}
            >
              {loading ? (
                <div className="flex items-center px-4">
                  <span className="loading loading-spinner loading-xl"></span>
                </div>
              ) : (
                "Create"
              )}
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AddAirplane;
