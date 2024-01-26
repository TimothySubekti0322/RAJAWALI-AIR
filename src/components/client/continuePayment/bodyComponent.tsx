import Breadcrumbs from "./breadcrumbs";
import PaymentCard from "./paymentCard";
import PaymentMethodCard from "./paymentMethodCard";
import PromoCard from "./promoCard";

const BodyComponent = () => {
  return (
    <>
      {/* Inner Body Section */}
      <div className="w-full px-4">
        {/* Departure Header */}
        <Breadcrumbs />

        {/* Fligth Card */}
        <div className="flex flex-col w-full mt-4 gap-y-3">
          <PaymentCard />
          <PaymentMethodCard />
          <PromoCard />
          <button
            className="mt-5 h-10 bg-[#1E90FF] rounded font-semibold"
            onClick={() => (window.location.href = "/selectedMethod")}
          >
            Pay with Virtual Account
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
