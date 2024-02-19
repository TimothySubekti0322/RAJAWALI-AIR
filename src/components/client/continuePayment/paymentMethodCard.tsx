import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import PaymentOptions from "./paymentOptions";
import {useNavigate, useParams} from "react-router-dom";

const TransferBank = [
  {
    image: "/images/payment-method/bca.svg",
    title: "BCA Transfer",
  },
];

const VirtualAccount = [
  {
    image: "/images/payment-method/mandiri.svg",
    title: "Mandiri Virtual Account",
  },
];

const TransferBankBni = [
  {
    image: "/images/payment-method/bni.svg",
    title: "BNI Transfer",
  },
];

interface IPaymentMethodCard {
    selectedValue: string,
    setSelectedValue: React.Dispatch<React.SetStateAction<string>>
}

const PaymentMethodCard = ({selectedValue, setSelectedValue}: IPaymentMethodCard) => {
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <div className="flex text-black flex-col w-full px-4 py-3 bg-white rounded-lg shadow-md">
      <p className="text-sm font-semibold text-black 2xl:text-sm">
        Payment Method
      </p>
      <PaymentOptions
        options={TransferBank}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <PaymentOptions
        options={VirtualAccount}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <PaymentOptions
        options={TransferBankBni}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <button
        onClick={() => {
          // window.location.href = "/paymentMethod";
            navigate("/paymentMethod/" + id)
        }}
        className="mt-2 flex justify-center text-[#1E90FF] text-xs font-semibold "
      >
        <p className="mr-2">More method</p>
        <FaChevronDown />
      </button>
    </div>
  );
};

export default PaymentMethodCard;
