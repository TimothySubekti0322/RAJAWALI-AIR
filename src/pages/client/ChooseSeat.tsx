import { useState } from "react";
import HeaderFill from "../../components/client/headerFill";
import HeaderLayout from "../../components/client/headerLayout";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../components/admin/layout/css/webScroll.module.css";

const ChooseSeat = () => {
  const [selectedPassenger, setSelectedPassenger] = useState<number>(0);
  // Slider Ref
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 30,
    },
  });

  // Save Function
  const handleSave = () => {
    console.log("Save");
  };
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <HeaderFill title="Choose Seat" />
      </HeaderLayout>

      {/* Body Component */}
      <div
        className={`w-full sm:w-[360px] mx-auto h-screen bg-[#E3EEFF] pt-[3.75rem]`}
        style={{ paddingBottom: "5rem" }}
      >
        {/* Passenger Card */}
        <div className="flex flex-col w-full h-full overflow-hidden">
          <div ref={ref} className="pt-4 pl-6 keen-slider">
            <button
              className={`${
                selectedPassenger == 0
                  ? "border-2 border-[#1E90FF] text-[#1E90FF]"
                  : "text-black"
              } flex flex-col bg-white keen-slider__slide number-slide1 font-semibold py-4 rounded-lg px-4`}
              onClick={() => setSelectedPassenger(0)}
            >
              <p className="text-xs">Passenger 1 (Adult)</p>
              <p className="text-[0.625rem] mt-2">1C (IDR 88.791)</p>
            </button>
            <button
              className={`${
                selectedPassenger == 1
                  ? "border-2 border-[#1E90FF] text-[#1E90FF]"
                  : "text-black"
              } flex flex-col bg-white keen-slider__slide number-slide2 font-semibold py-4 rounded-lg px-4`}
              onClick={() => setSelectedPassenger(1)}
            >
              <p className="text-xs">Passenger 2 (Adult)</p>
              <p className="text-[0.625rem] mt-2">1C (IDR 88.791)</p>
            </button>
            <button
              className={`${
                selectedPassenger == 2
                  ? "border-2 border-[#1E90FF] text-[#1E90FF]"
                  : "text-black"
              } flex flex-col bg-white keen-slider__slide number-slide3 font-semibold py-4 rounded-lg px-4`}
              onClick={() => setSelectedPassenger(2)}
            >
              <p className="text-xs">Passenger 3 (Adult)</p>
              <p className="text-[0.625rem] mt-2">1C (IDR 88.791)</p>
            </button>
            <button
              className={"invisible w-6 keen-slider__slide number-slide4"}
            ></button>
          </div>

          {/* Flight Card */}
          <div className="w-full px-6 mt-4">
            <div className="flex flex-col w-full px-4 py-4 bg-white rounded-lg shadow-md border-[#E0E0E0] border-2">
              <div className="flex items-center text-black gap-x-2">
                <img
                  src="/images/blue-rajawali-air-logo.svg"
                  alt="rajawali air logo"
                />
                <p className="text-xs font-semibold">BPN</p>
                <img
                  src="/images/long-arrow.svg"
                  alt="long arrow"
                  className="w-4"
                />
                <p className="text-xs font-semibold">YIA</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-[#757575] text-[0.625rem]">
                  25 Jan 2024, 08:15 - 09:05 | 1h 50m
                </p>
              </div>
            </div>
          </div>

          {/* Choose Seat */}
          <div className="flex items-center justify-around w-full px-4 py-2 mt-4 bg-white border-y-2 border-[#E0E0E0]">
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 bg-[#9E9E9E] rounded-sm"></div>
              <p className="text-sm font-semibold text-black">Not Available</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-7 h-7 bg-[#1E90FF] rounded-sm"></div>
              <p className="text-sm font-semibold text-black">Available</p>
            </div>
          </div>
          <div
            className={`overflow-y-scroll text-black bg-white grow ${styles.hideScroll}`}
          >
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
            Test
            <br />
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[5rem] px-4 bg-white border-[#1E90FF] border-t-2 rounded-t-sm flex justify-between items-center text-black">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-[#1E90FF] font-bold">
            IDR 138.791
            {/* {numberToCurrency("IDR", price, true, false)} */}
          </p>
        </div>
        <button
          className="bg-[#1E90FF] text-white font-semibold text-sm hover:bg-[#0C70DD] rounded-md py-[0.3rem] px-12 shadow-md"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default ChooseSeat;
