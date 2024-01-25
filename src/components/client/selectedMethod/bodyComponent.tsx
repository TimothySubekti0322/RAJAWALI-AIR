
import Breadcrumbs from "./breadcrumbs";
import SelectedCard from "./selectedCard";
import TransferCard from "./transferCard";
import VaCard from "./vaCard";

const BodyComponent = () => {

  return (
    <>
      
      {/* Inner Body Section */}
      <div className="w-full px-4">
        {/* Departure Header */}
        <Breadcrumbs />

        {/* Fligth Card */}
        <div className="flex flex-col w-full mt-4 gap-y-3">
          <SelectedCard />
          <TransferCard />
          <p className="text-[16px] font-bold text-black">Virtual Account</p>
          <VaCard />
          <button className="mt-5 h-10 bg-[#1E90FF] rounded font-semibold">
                Check Order List
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyComponent;