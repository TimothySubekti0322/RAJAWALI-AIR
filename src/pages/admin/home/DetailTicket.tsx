import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import API_URL from "../../../assets/static/API";
import { useEffect, useState } from "react";
import axios from "axios";
import { numberToCurrency } from "../../../utils/NumberFormater";
import moment from "moment";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgCheckO } from "react-icons/cg";
import TextDetail from "../../../components/admin/home/Ticket-Details/TextDetail";
import ModalAproved from "../../../components/admin/home/Ticket-Details/modals/ModalAproved";
import ModalRejected from "../../../components/admin/home/Ticket-Details/modals/ModalRejected";

const breadcrumbs = [
  <Typography key="1" color="text.primary">
    Dashboard
  </Typography>,
  <Typography key="2" color="text.primary">
    Home
  </Typography>,
  <Typography key="3" color="text.primary">
    Ticket Details
  </Typography>,
];

const apiURL = `${API_URL}/v1/reservations`;
const token = localStorage.getItem("token");

const DetailTicket = () => {
  const path = window.location.pathname;
  const id = path.split("/")[4];
  const [form, setForm] = useState({
    id: "",
    payment: {
      id: "",
    },
    expiredAt: "",
    flightDetailList: [
      { flightId: "" },
      { useTravelAssurance: false },
      { useBagageAssurance: false },
      { useFlightDelayAssurance: false },
    ],
    user: {
      id: "",
      fullName: "tidak ada",
      email: "",
    },
    phoneNumber: "",
    classType: "",
    passengers: [{ genderType: "" }, { ageType: "" }, { fullname: "" }],
    promo: "",
    totalPrice: 0,
    paymentStatus: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.data.success) {
          setForm(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">Ticket Details</p>
        <div className="flex items-center justify-between mt-2 ">
          {/* BreadCrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <hr className="border-1 w-full mt-4 border-black h-0" />
        <div className="inline-flex gap-3 mt-4">
          <img src="/images/home-dash/detail.svg" alt="" />
          <div className="fle">
            <p className="text-black font-semibold text-2xl font-['Roboto']">
              Details Information
            </p>
            <p className="text-gray-500">
              List of information regarding flight ticket bookings along with
              any additional passenger services.
            </p>
          </div>
        </div>
        {/* Ticket Details */}
        <div className="bg-[#F5F5F5] rounded-lg mt-3 w-full">
          <div className="inline-flex gap-3 mt-4 px-4">
            <img src="/images/home-dash/order-detail.svg" alt="" />
            <div className="fle">
              <p className="text-black font-semibold text-xl font-['Roboto']">
                Ticket Order Details
              </p>
              <p className="text-gray-500">
                List of information regarding flight ticket bookings.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg px-4 mx-4 mt-3 p-4 mb-5">
            <TextDetail title="Booking ID" value={form.id} />
            <TextDetail title="Payment ID" value={form.payment.id} />
            <TextDetail
              title="Booking Time"
              value={moment(form.expiredAt).format("DD MMM YYYY, HH:mm")}
            />
            <TextDetail
              title="Flight Id"
              value={form.flightDetailList
                .map((flight) => flight.flightId)
                .join(", ")}
            />
            <TextDetail
              title="Full Name"
              value={(form.user && form.user.fullName) ?? "Data Null"}
            />
            <TextDetail
              title="Email"
              value={(form.user && form.user.email) ?? "Data Null"}
            />
            <TextDetail title="Phone Number" value={form.phoneNumber} />
            <TextDetail title="Cabin Class" value={form.classType} />
            <TextDetail
              title="Passengers"
              value={form.passengers
                .map((passenger) => passenger.ageType)
                .join(", ")}
            />
            <TextDetail
              title="Promo Code"
              value={
                Array.isArray(form.promo)
                  ? form.promo.filter(Boolean)
                  : form.promo
              }
            />
            <TextDetail
              title="Price Details"
              value={numberToCurrency("IDR", form.totalPrice, true, false)}
            />
            <TextDetail
              title="Pay Status"
              value={form.paymentStatus || "Data Null"}
            />
          </div>
          <div className="text-[#F5F5F5] mt-[-1.2rem]">ayam</div>
        </div>

        {/* Passenger Details */}
        <div>
          {form.passengers.map((passenger, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded-lg mt-4 w-full">
              <div className="inline-flex gap-3 mt-4 px-4">
                <img src="/images/home-dash/profile.svg" alt="" />
                <div className="fle">
                  <p className="text-black font-semibold text-xl font-['Roboto']">
                    Passenger {index + 1}
                  </p>
                  <p className="text-gray-500 font-['Roboto']">
                    List of passenger information and additional facilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-lg px-4 mx-4 mt-3 p-4 mb-5">
                <TextDetail title="Full Name" value={passenger.fullname} />
                <TextDetail title="Gender" value={passenger.genderType} />
                <TextDetail title="Age" value={passenger.ageType} />
                <div className="flex flex-col">
                  <TextDetail
                    title="Assurance"
                    value={[
                      form.flightDetailList.map(
                        (flight) =>
                          `Bagage Assurance: ${
                            flight.useBagageAssurance ? "Yes" : "No"
                          }`
                      ),
                      form.flightDetailList.map(
                        (flight) =>
                          `Travel Assurance: ${
                            flight.useTravelAssurance ? "Yes" : "No"
                          }`
                      ),
                      form.flightDetailList.map(
                        (flight) =>
                          `Flight Delay Assurance: ${
                            flight.useFlightDelayAssurance ? "Yes" : "No"
                          }`
                      ),
                    ].join(", ")}
                  />
                </div>
                <TextDetail title="Facilities" value={"to be continued"} />
              </div>
              <div className="text-[#F5F5F5] mt-[-1.2rem]">ayam</div>
            </div>
          ))}
        </div>
        <div className="flex item-center justify-end gap-5 mt-10">
          <button
            className="inline-flex gap-1 text-white rounded-lg bg-red-500 p-4 hover:bg-red-700"
            onClick={() =>
              (
                document.getElementById(
                  `my_modal_Reject_${form.payment.id}`
                ) as HTMLFormElement
              )?.showModal()
            }
          >
            <div className=" text-2xl">
              <AiOutlineCloseCircle />
            </div>
            <div className="font-['Roboto']">Rejected</div>
          </button>
          <button
            className="inline-flex gap-1 text-white rounded-lg bg-green-500 p-4 hover:bg-green-700"
            onClick={() =>
              (
                document.getElementById(
                  `my_modal_aproved_${form.payment.id}`
                ) as HTMLFormElement
              )?.showModal()
            }
          >
            <div className="text-2xl">
              <CgCheckO />
            </div>
            <div className="font-['Roboto']">Approve</div>
          </button>
        </div>
        <ModalAproved token={token} id={form.payment.id} />
        <ModalRejected token={token} id={form.payment.id} />
      </div>
    </Layout>
  );
};

export default DetailTicket;
