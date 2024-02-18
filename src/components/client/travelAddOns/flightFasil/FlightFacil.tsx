import React from "react";
import {useNavigate} from "react-router-dom";
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
  const navigate = useNavigate();
  const handleClick = (title: string) => {
    console.log(title);
    if (title == "Baggage") {
      navigate("/baggageDepart");
    } else if (title == "In-flight Meals") {
      navigate("/meals");
    } else if (title === "Seat Number") {
      navigate("/chooseSeat")
    }
  };
  return (
    <>
      <div className="flex w-[20.5rem] h-[5.5rem] bg-white rounded-lg shadow mt-[0.625rem]">
        <div className="p-[0.75rem]">
          <div className="flex flex-grow flex-col-2">
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
            <button onClick={() => handleClick(textBold)}>
              <div className="flex my-5 ml-5 text-black">
                <img
                  src={img2}
                  alt=""
                  className="rounded-full hover:bg-slate-200 focus:outline-none focus:shadow-outline"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
