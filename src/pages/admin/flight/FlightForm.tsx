import API_URL from "../../../assets/static/API";
import Typography from "@mui/material/Typography";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useParams } from "react-router-dom";
import { getListAirplane, getListAirport } from "../../../context/ApiContext";
import {
  AirplaneData,
  AirportData,
} from "../../../assets/static/TableDataTypes";
import { InputFlight } from "./InputFlightDataType";

const FlightForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [airportList, setAirportList] = useState<AirportData[]>([]);
  const [airplaneList, setAirplaneList] = useState<AirplaneData[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [form, setForm] = useState<InputFlight>({
    sourceAirportId: "",
    destinationAirportId: "",
    airplaneId: "",
    sourceTerminal: "",
    destinationTerminal: "",
    thumbnailUrl: "",
    departureDate: "",
    arrivalDate: "",
    economySeatsPrice: 0,
    businessSeatsPrice: 0,
    firstSeatsPrice: 0,
    discount: 0,
    points: 0,
  });

  const breadcrumbs = [
    <Typography key="1" color="text.primary">
      Dashboard
    </Typography>,
    <Typography key="2" color="text.primary">
      Flight
    </Typography>,
    <Typography key="3" color="text.primary">
      {id !== undefined ? "Edit" : "Add"}
    </Typography>,
  ];

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(form.destinationTerminal);
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const saveFlight = (input: InputFlight, id: string | undefined) => {
    if (id === undefined) {
      axios
        .post(`${API_URL}/v1/flights`, input)
        .then(({ data }) => {
          toast.success(toast.success(data.message));
          setTimeout(() => {
            navigate("/dashboard/flight");
          }, 1000);
        })
        .catch((error) => {
          // console.log(error);
          toast.error(error.response.data.message);
        });
    } else {
      axios
        .put(`${API_URL}/v1/flights/${id}`, input)
        .then(({ data }) => {
          // Toast
          toast.success(data.message);
          setTimeout(() => {
            navigate("/dashboard/flight");
          }, 1000);
        })
        .catch((error) => {
          // Toast
          toast.error(error.response.data.message);
        });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(form);
    setLoading(true);
    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    if (id && !selectedFile) {
      saveFlight(form, id);
    } else {
      const token = localStorage.getItem("token") ?? "";
      axios
        .post(`${API_URL}/v1/images/upload`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          setForm({ ...form, thumbnailUrl: data.data.urlImage });
          saveFlight(form, id);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getListAirport().then((resultData) => setAirportList(resultData));
    getListAirplane().then((resultData) => setAirplaneList(resultData));
    if (id !== undefined) {
      axios.get(`${API_URL}/v1/flights/${id}`).then(({ data }) => {
        console.log(data.data.sourceTerminal);
        setForm({
          ...form,
          sourceAirportId: data.data.sourceAirport.id,
          destinationAirportId: data.data.destinationAirport.id,
          airplaneId: data.data.airplane.id,
          sourceTerminal: data.data.sourceTerminal,
          destinationTerminal: data.data.destinationTerminal,
          thumbnailUrl: data.data.thumbnailUrl,
          departureDate: data.data.departureDate,
          arrivalDate: data.data.arrivalDate,
          economySeatsPrice: data.data.economySeatsPrice,
          businessSeatsPrice: data.data.businessSeatsPrice,
          firstSeatsPrice: data.data.firstSeatsPrice,
          discount: data.data.discount,
          points: data.data.points,
        });
      });
    }
  }, []);

  function handleCancel() {
    navigate("/dashboard/flight");
    setForm({
      sourceAirportId: "",
      destinationAirportId: "",
      airplaneId: "",
      sourceTerminal: "",
      destinationTerminal: "",
      thumbnailUrl: "",
      departureDate: "",
      arrivalDate: "",
      economySeatsPrice: 0,
      businessSeatsPrice: 0,
      firstSeatsPrice: 0,
      discount: 0,
      points: 0,
    });
    setSelectedFile(null);
  }

  return (
    <Layout>
      <Toaster />
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">
          {id !== undefined ? "Edit Flight" : "Add Flight"}
        </p>
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
        <form onSubmit={handleSubmit}>
          <section className="w-full pt-6 mt-8 border-t-4">
            <div className="flex flex-col w-full gap-y-6">
              {/*Source Airport*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"sourceAirportId"}
                  className="text-xl font-bold"
                >
                  Airport Source
                </label>
                <select
                  title={"Source Airport"}
                  className="select select-bordered w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  name={"sourceAirportId"}
                  value={form.sourceAirportId}
                  onChange={handleOnSelect}
                  required
                >
                  <option disabled selected value={""}>
                    Select Airport
                  </option>
                  {airportList.map((data) => (
                    <option value={data.id}>
                      {data.name} ({data.cityCode})
                    </option>
                  ))}
                </select>
              </div>

              {/*Destination Airport*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"destinationAirportId"}
                  className="text-xl font-bold"
                >
                  Airport Destination
                </label>
                <select
                  className="select select-bordered w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  name={"destinationAirportId"}
                  value={form.destinationAirportId}
                  onChange={handleOnSelect}
                  required
                >
                  <option disabled selected value={""}>
                    Select Airport
                  </option>
                  {airportList.map((data) => (
                    <option value={data.id}>
                      {data.name} ({data.cityCode})
                    </option>
                  ))}
                </select>
              </div>

              {/*Destination Airport*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"destinationAirportId"}
                  className="text-xl font-bold"
                >
                  Airplane
                </label>
                <select
                  className="select select-bordered w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  name={"airplaneId"}
                  value={form.airplaneId}
                  onChange={handleOnSelect}
                  required
                >
                  <option disabled selected value={""}>
                    Select Airplane
                  </option>
                  {airplaneList.map((data) => (
                    <option value={data.id}>{data.airplaneCode}</option>
                  ))}
                </select>
              </div>

              {/* Source Terminal */}
              <div className="flex flex-col w-full">
                <label htmlFor={"sourceTerminal"} className="text-xl font-bold">
                  Source Terminal
                </label>
                <input
                  type="text"
                  name={"sourceTerminal"}
                  id={"sourceTerminal"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter source terminal"}
                  onChange={handleInputChange}
                  value={form.sourceTerminal}
                  required
                />
                {/*<i className="mt-2 text-xs">{description}</i>*/}
              </div>

              {/* Destination Terminal */}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"destinationTerminal"}
                  className="text-xl font-bold"
                >
                  Destination Terminal
                </label>
                <input
                  type="text"
                  name={"destinationTerminal"}
                  id={"destinationTerminal"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter destination terminal"}
                  onChange={handleInputChange}
                  value={form.destinationTerminal}
                  required
                />
                {/*<i className="mt-2 text-xs">{description}</i>*/}
              </div>

              {/*Departure Date*/}
              <div className="flex flex-col w-full">
                <label htmlFor={"departureDate"} className="text-xl font-bold">
                  Departure Date
                </label>
                <input
                  type="datetime-local"
                  name={"departureDate"}
                  id={"departureDate"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter departure date"}
                  onChange={handleInputChange}
                  value={form.departureDate}
                  required
                  // defaultValue={value}
                />
              </div>

              {/*Arrival Date*/}
              <div className="flex flex-col w-full">
                <label htmlFor={"departureDate"} className="text-xl font-bold">
                  Arrival Date
                </label>
                <input
                  type="datetime-local"
                  name={"arrivalDate"}
                  id={"arrivalDate"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter arrival date"}
                  onChange={handleInputChange}
                  value={form.arrivalDate}
                  required
                  // defaultValue={value}
                />
              </div>

              {/*Economy seats price*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"economySeatsPrice"}
                  className="text-xl font-bold"
                >
                  Economy Seat Price
                </label>
                <input
                  type="number"
                  name={"economySeatsPrice"}
                  id={"economySeatsPrice"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter economy seat price"}
                  onChange={handleInputChange}
                  value={form.economySeatsPrice}
                  required
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/*Business seats price*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"businessSeatsPrice"}
                  className="text-xl font-bold"
                >
                  Business Seat Price
                </label>
                <input
                  type="number"
                  name={"businessSeatsPrice"}
                  id={"businessSeatsPrice"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter business seat price"}
                  onChange={handleInputChange}
                  value={form.businessSeatsPrice}
                  required
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/*First seats price*/}
              <div className="flex flex-col w-full">
                <label
                  htmlFor={"firstSeatsPrice"}
                  className="text-xl font-bold"
                >
                  First Seat Price
                </label>
                <input
                  type="number"
                  name={"firstSeatsPrice"}
                  id={"firstSeatsPrice"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter first seat price"}
                  onChange={handleInputChange}
                  value={form.firstSeatsPrice}
                  required
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/*Discount*/}
              <div className="flex flex-col w-full">
                <label htmlFor={"discount"} className="text-xl font-bold">
                  Discount
                </label>
                <input
                  type="number"
                  name={"discount"}
                  id={"discount"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter economy seat price"}
                  onChange={handleInputChange}
                  value={form.discount}
                  required
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/*Points*/}
              <div className="flex flex-col w-full">
                <label htmlFor={"points"} className="text-xl font-bold">
                  Points
                </label>
                <input
                  type="number"
                  name={"points"}
                  id={"points"}
                  className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2 bg-white"
                  placeholder={"Enter points"}
                  onChange={handleInputChange}
                  value={form.points}
                  required
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/*Thumbnail URL*/}
              <div className="flex flex-col w-full">
                <label htmlFor={"thumbnailUrl"} className="text-xl font-bold ">
                  Thumbnail Picture
                </label>
                <input
                  type="file"
                  name={"thumbnailUrl"}
                  id={"thumbnailUrl"}
                  className="w-4/5 mt-4 file-input file-input-bordered "
                  onChange={handleFileInputChange}
                  // value={form.thumbnailUrl}
                  // style={{textDecoration: 'none'}}
                />
              </div>

              {/* Submit & cancel Button */}
              <div className="flex items-center mt-4 gap-x-4">
                {/* Cancel Button */}
                <button
                  className="px-4 py-2 rounded-lg bg-[#CB3A31] hover:bg-[#A91810] text-white font-semibold text-xl"
                  onClick={handleCancel}
                >
                  cancel
                </button>

                {/* Submit Button */}
                <button
                  className="px-4 py-2 rounded-lg bg-[#1E90FF] hover:bg-[#0C70DD] text-white font-semibold text-xl"
                  type={"submit"}
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
        </form>
      </div>
    </Layout>
  );
};
export default FlightForm;
