import React from "react";
interface FlightFacilProps {
  img1: string;
  textBold: string;
  paraf: string;
  img2: string;
}
export const FlightFacil: React.FC<FlightFacilProps> = ({
  img1,
  textBold,
  paraf,
  img2,
}) => {
  return (
    <>
      <div className="flex w-[20.5rem] h-[5.5rem] bg-white rounded-lg shadow mt-[0.625rem]">
        <div className="p-[0.75rem]">
          <div className="flex flex-col-2 flex-grow">
            <div className="flex-auto w-[15.75rem]">
              <div className="inline-flex text-black">
                <div className="mr-[0.5rem]">
                  <img src={img1} alt="" />
                </div>
                <div className="font-bold font-['Roboto'] leading-tight tracking-tight">
                  <p>{textBold}</p>
                </div>
              </div>
              <div className="flex-col w-[15.75rem] text-neutral-600 text-xs font-normal font-['Roboto'] leading-none text-left text-[0.625rem] mt-[0.5rem]">
                <p>{paraf}</p>
              </div>
            </div>
            <button>
              <div className="flex text-black ml-5 my-5">
                <img src={img2} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
