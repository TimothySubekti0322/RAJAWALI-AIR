import React from "react";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import PaymentOptions from "../../components/client/paymentMethod/paymentOption";
import {useNavigate, useParams} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import {GetReservationValue} from "../../utils/GetLocalStorageValue.ts";
import axios from "axios";
import API_URL from "../../assets/static/API.ts";
import CircularProgress from "@mui/material/CircularProgress";

const TransferBank = [
  {
    image: "/images/payment-method/bca.svg",
    title: "BCA Transfer",
  },
  {
    image: "/images/payment-method/bri.svg",
    title: "BRI Transfer",
  },
  {
    image: "/images/payment-method/mandiri.svg",
    title: "Mandiri Transfer",
  },
  {
    image: "/images/payment-method/bni.svg",
    title: "BNI Transfer",
  },
];

const VirtualAccount = [
  {
    image: "/images/payment-method/bca.svg",
    title: "BCA Virtual Account",
  },
  {
    image: "/images/payment-method/bri.svg",
    title: "BRI Virtual Account",
  },
  {
    image: "/images/payment-method/mandiri.svg",
    title: "Mandiri Virtual Account",
  },
  {
    image: "/images/payment-method/bni.svg",
    title: "BNI Virtual Account",
  },
];

// const ConvenienceStore = [
//   {
//     image: "/images/payment-method/alfamart.svg",
//     title: "Alfamart/Alfamidi",
//   },
//   {
//     image: "/images/payment-method/indomaret.svg",
//     title: "Indomaret",
//   },
// ];

const PaymentMethod = () => {
  const [selectedValue, setSelectedValue] = React.useState("other");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {id} = useParams();

  const savePaymentMethod = () => {
    if (selectedValue === "other") {
      toast.error("Please, select method payment first")
    } else {
      setIsLoading(true);
      const flightDetail = GetReservationValue();
      flightDetail.promo = "";
      // axios.post(`${API_URL}/v1/reservations`, flightDetail)
      //     .then(({data}) => {
      //       // navigate("/selectedMethod/999");
      //       localStorage.setItem("paymentMethod", selectedValue);
      //       navigate(`/selectedMethod/${data.data.id}`)
      //     })
      //     .catch((error) => {
      //       toast.error(error.response.data.message);
      //     })
      //     .finally(() => {
      //       setIsLoading(false);
      //     })
      const createPayment = {
        reservationId: id,
        method: selectedValue
      }
      axios.post(`${API_URL}/v1/payments/create`, createPayment)
          .then(() => {
            // navigate("/selectedMethod/999");
            localStorage.setItem("paymentMethod", selectedValue);
            navigate(`/selectedMethod/${id}`)
          })
          .catch((error) => {
            console.log(error)
            toast.error(error.response.data.message);
          })
          .finally(() => {
            setIsLoading(false);
          })
    }
  }

  const handleApply = () => {
    savePaymentMethod();
  };
  return (
      <>
        {isLoading && (
            <div className="flex flex-col items-center justify-center w-screen h-screen">
              <CircularProgress size="6rem" />
              <div className="flex items-end">
                <p className="mt-12 text-[1.5rem] font-bold text-black">Loading</p>
                <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
              </div>
            </div>
        )}
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
          <Toaster />
          <HeaderLayout>
            <HeaderFill title="Payment Method" />
          </HeaderLayout>
          <BodyLayout paddingBottomSize="0">
            <div className="flex flex-col w-full px-5 pt-4 text-black gap-y-5">
              <p className="font-bold">Transfer Bank</p>
              <PaymentOptions
                  options={TransferBank}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
              />
              <p className="font-bold">Virtual Account</p>
              <PaymentOptions
                  options={VirtualAccount}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
              />
              {/*<p className="font-bold">Convenience Store</p>*/}
              {/*<PaymentOptions*/}
              {/*  options={ConvenienceStore}*/}
              {/*  selectedValue={selectedValue}*/}
              {/*  setSelectedValue={setSelectedValue}*/}
              {/*/>*/}
              <button
                  className="w-full bg-[#1E90FF] rounded-lg mt-4 py-3 mb-6 text-white font-semibold"
                  onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </BodyLayout>
        </section>
      </>
  );
};

export default PaymentMethod;
