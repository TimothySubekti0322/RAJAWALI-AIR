import Breadcrumbs from "./breadcrumbs";
import PaymentCard from "./paymentCard";
import PaymentMethodCard from "./paymentMethodCard";
import PromoCard from "./promoCard";
import React from "react";
import {useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import {GetReservationValue} from "../../../utils/GetLocalStorageValue.ts";
import axios from "axios";
import API_URL from "../../../assets/static/API.ts";
import CircularProgress from "@mui/material/CircularProgress";
// import {NavigatePage} from "../../../utils/NavigatePage.ts";

const BodyComponent = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("other");
  const [promoCode, setPromoCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleApply = () => {
    if (selectedValue === "other") {
      toast.error("Please, select method payment first")
    } else {
      setIsLoading(true);
      const flightDetail = GetReservationValue();
      // flightDetail.promo = promoCode;
      axios.post(`${API_URL}/v1/reservations`, flightDetail)
          .then(({data}) => {
            // navigate("/selectedMethod/999");
            localStorage.setItem("paymentMethod", selectedValue);
            navigate(`/selectedMethod/${data.data.id}`)
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          })
          .finally(() => {
            setIsLoading(false);
          })
    }
  }

  // const handleApply = () => {
  //   // localStorage.setItem("paymentMethod", selectedValue);
  //   savePaymentMethod()
  // };

  return (
    <>
      <Toaster />
      {isLoading && (
          <div className="flex flex-col items-center justify-center w-screen h-screen">
            <CircularProgress size="6rem" />
            <div className="flex items-end">
              <p className="mt-12 text-[1.5rem] font-bold text-black">Loading</p>
              <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
            </div>
          </div>
      )}
      {/* Inner Body Section */}
      {!isLoading && (
          <div className="w-full px-4">
            {/* Departure Header */}
            <Breadcrumbs />

            {/* Fligth Card */}
            <div className="flex flex-col w-full mt-4 gap-y-3">
              <PaymentCard />
              <PaymentMethodCard
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
              />
              <PromoCard code={promoCode} setCode={setPromoCode} />
              <button
                  className="mt-5 h-10 bg-[#1E90FF] rounded font-semibold"
                  onClick={handleApply}
              >
                Choose
              </button>
            </div>
          </div>
      )}
    </>
  );
};

export default BodyComponent;
