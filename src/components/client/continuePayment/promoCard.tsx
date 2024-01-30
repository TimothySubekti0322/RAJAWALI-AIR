import { FaChevronRight } from "react-icons/fa";

const promoCard = () => {
  return (
    <div className="flex flex-col w-full px-4 py-3 bg-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <div>
          <p className=" text-xs font-semibold text-[#757575]">Promo Code</p>
          <div className="flex mt-2">
            <img
              src="/public/images/promo-code.png"
              alt="promo"
              className="h-6"
            />
            <input
              type="text"
              placeholder="Have a promo code?"
              className="-mt-1 ml-3 bg-white text-black text-xs font-semibold placeholder:text-xs placeholder:text-[#505050] placeholder:font-semibold border-0"
            />
          </div>
        </div>
        <button><FaChevronRight className="text-[#505050] text-sm items-center bg-white" /></button>
      </div>
      <hr />
    </div>
  );
};

export default promoCard;
