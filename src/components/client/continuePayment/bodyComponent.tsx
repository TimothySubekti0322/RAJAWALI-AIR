import Breadcrumbs from "./breadcrumbs";
import PaymentCard from "./paymentCard";
import PaymentMethodCard from "./paymentMethodCard";
import PromoCard from "./promoCard";
import React from "react";
import {useNavigate} from "react-router-dom";
// import {NavigatePage} from "../../../utils/NavigatePage.ts";

const BodyComponent = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("other");
  const handleApply = () => {
    localStorage.setItem("paymentMethod", selectedValue);
    navigate("/selectedMethod")
  };

  return (
    <>
      {/* Inner Body Section */}
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
          <PromoCard />
          <button
            className="mt-5 h-10 bg-[#1E90FF] rounded font-semibold"
            onClick={handleApply}
          >
            Pay with Virtual Account
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
