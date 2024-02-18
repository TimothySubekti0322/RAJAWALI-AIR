import { useEffect, useState } from "react";
import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TextInput from "../../../components/admin/input/textInput";
import axios from "axios";
import API_URL from "../../../assets/static/API";
import toast, { Toaster } from "react-hot-toast";

const breadcrumbs = [
  <Typography key="1" color="text.primary">
    Dashboard
  </Typography>,
  <Typography key="2" color="text.primary">
    Airport
  </Typography>,
  <Typography key="3" color="text.primary">
    Edit
  </Typography>,
];

const apiURL = `${API_URL}/v1/airports`;

const EditAirport = () => {
  const path = window.location.pathname;
  const id = path.split("/")[4];

  // Initial Render Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/${id}`);
        console.log(response);
        if (response.data.success) {
          setForm(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    country: "",
    city: "",
    cityCode: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token") ?? "";
      const response = await axios.put(`${apiURL}/${id}`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.data.success) {
        toast.success("Data added successfully");
        setLoading(false);
        setForm({
          name: "",
          country: "",
          city: "",
          cityCode: "",
        });
        setTimeout(() => {
          window.location.href = "/dashboard/airport";
        }, 1000); // Delayed by 1000 milliseconds (1 seconds)
      }
    } catch (error) {
      console.log(error);
      setTimeout(toast.error("Something when wrong"), 100);
    }
  };

  return (
    <Layout>
      <Toaster />
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">Edit Airport</p>
        <div className="flex items-center justify-between mt-2 ">
          {/* BreadCrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>

        {/* form */}
        <section className="w-full pt-6 mt-8 border-t-4">
          <div className="flex flex-col w-full gap-y-6">
            {/* Airport Name */}
            <TextInput
              title="Airport Name"
              inputID="name"
              placeholder="Enter Airport Name"
              onChange={handleInputChange}
              value={form.name}
              description="Airport Name must be unique"
            />

            {/* Country */}
            <TextInput
              title="Country"
              inputID="country"
              placeholder="Enter Aiport Country"
              onChange={handleInputChange}
              value={form.country}
              description=""
            />

            {/* City */}
            <TextInput
              title="Airport City"
              inputID="city"
              placeholder="Enter Airport city"
              onChange={handleInputChange}
              value={form.city}
              description=""
            />

            {/* City Code */}
            <TextInput
              title="City Code"
              inputID="cityCode"
              placeholder="Enter City Code"
              onChange={handleInputChange}
              value={form.cityCode}
              description="Ex: CGK"
            />

            {/* Submit & cancel Button */}
            <div className="flex items-center mt-4 gap-x-4">
              {/* Cancel Button */}
              <button
                className="px-4 py-2 rounded-lg bg-[#CB3A31] hover:bg-[#A91810] text-white font-semibold text-xl"
                onClick={() => {
                  window.location.href = "/dashboard/airport";
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
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EditAirport;
