import React from "react";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import PaymentOptions from "../../components/client/paymentMethod/paymentOption";

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

const ConvenienceStore = [
  {
    image: "/images/payment-method/alfamart.svg",
    title: "Alfamart/Alfamidi",
  },
  {
    image: "/images/payment-method/indomaret.svg",
    title: "Indomaret",
  },
];

const PaymentMethod = () => {
  const [selectedValue, setSelectedValue] = React.useState("other");
  const handleApply = () => {
    localStorage.setItem("paymentMethod", selectedValue);
    window.location.href = "/continuePayment";
  };
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
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
          <p className="font-bold">Convenience Store</p>
          <PaymentOptions
            options={ConvenienceStore}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          w
          <button
            className="w-full bg-[#1E90FF] rounded-lg mt-4 py-3 mb-6 text-white font-semibold"
            onClick={() => handleApply()}
          >
            Apply
          </button>
        </div>
      </BodyLayout>
    </section>
  );
};

export default PaymentMethod;
