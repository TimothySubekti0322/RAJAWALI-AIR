import { FaChevronRight } from "react-icons/fa";
import React from "react";

interface IPromo {
  code: string,
  setCode: React.Dispatch<React.SetStateAction<string>>
}
const promoCard = ({code, setCode}: IPromo) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value)
  }

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
              value={code}
              onChange={handleChange}
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
