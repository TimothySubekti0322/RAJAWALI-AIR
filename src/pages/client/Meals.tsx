import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import MealsCard from "../../components/client/meals/meals/mealsCard";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import React from "react";
import { numberToCurrency } from "../../utils/NumberFormater";
import BookingProvider from "../../providers/LocalStorageProvider";
import { Passenger } from "../../assets/static/LocalStorage.type";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

const Meals = () => {
  const [price, setPrice] = React.useState<number>(0);
  // const [passenger, setPassenger] = React.useState<Passenger[]>([]);
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   slides: {
  //     perView: 10,
  //     spacing: 1,
  //   },
  // });
  console.log(price);

  const passengers: Passenger[] = JSON.parse(
    localStorage.getItem("passengers") as string
  );

  const handleMealsClick = () => {
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice") || "0"); // Menjadi default "0" jika localStorage.getItem("totalPrice") mengembalikan null
    totalPrice += price; // Menambahkan nilai price baru ke totalPrice yang ada

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice)); // Menyimpan kembali totalPrice yang sudah ditambahkan ke localStorage

    window.location.href = "/travelAddOns";
  };

  // const handlePassengerChange = () => {
  //   setPassenger(passengers);

  //   console.log('isi set penumpang', setPassenger)
  // }
  return (
    <BookingProvider requiredItem={["passengers"]}>
      <section className="w-full min-h-screen bg-[#f7f7f7] relative">
        <HeaderLayout>
          <div className="inline-flex items-center">
            <div className="flex-initial">
              <button
                onClick={() => {
                  window.location.href = "/travelAddOns";
                }}
              >
                <FaArrowLeft className="text-xl text-white" />
              </button>
            </div>
            <div className="flex-initial text-center text-stone-50 text-base font-bold font-['Roboto'] tracking-tight pl-[5.31rem]">
              <p className="text-white">Meals for Depart</p>
            </div>
          </div>
        </HeaderLayout>

        {/* Body */}
        {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
        <BodyLayout paddingBottomSize="5rem">
          <div className="inline-flex pt-[1rem] px-[1rem] flex-col">
            <div className="grid grid-cols-2 gap-2 text-black mb-[0.75rem]">
              {passengers?.map((passenger, index) => (
                <a href="#" className="grid grid-cols-2" key={index}>
                  <div className="w-[10rem] h-3.75rem bg-white py-1 px-3 text-[0.75rem] font-['Roboto'] rounded-md shadow-md hover:bg-sky-300">
                    <p className="font-bold">{`Passenger ${index + 1} (${
                      passenger.ageType
                    })`}</p>
                    <p>({numberToCurrency("IDR", price, true, false)})</p>
                  </div>
                </a>
              ))}
            </div>
            <div className=" w-[20.5rem] h-16 p-2.5 bg-stone-50 rounded-lg shadow border border-neutral-200 flex-col justify-start items-start gap-2.5 inline-flex mb-[0.75rem] pt-3">
              <div className="flex flex-col items-start justify-start gap-2 ">
                <div className="flex flex-col items-start justify-start gap-2 ">
                  <div className="inline-flex items-center justify-start gap-2 ">
                    <img
                      className="w-6 h-4 RajawaliAirPng2"
                      src="/images/meals/rajawali.png"
                    />
                    <div className="flex items-center justify-start gap-2 ">
                      <div className="Bpn text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        BPN
                      </div>
                      <div className="text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        <MdOutlineArrowRightAlt size={20} />
                      </div>
                      <div className="Yia text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        YIA
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1 ">
                    <div className=" text-neutral-500 text-xs font-normal font-['Roboto'] leading-none">
                      25 Jan 2024, 08:15 - 09:05 | 1h 50m
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[20.5rem] h-16 p-2.5 bg-stone-50 rounded-lg shadow border border-neutral-200 flex-col justify-start items-start gap-2.5 inline-flex mb-[0.75rem] pt-3">
              <div className="flex flex-col items-start justify-start gap-2 ">
                <div className="flex flex-col items-start justify-start gap-2 ">
                  <div className="inline-flex items-center justify-start gap-2 ">
                    <img
                      className="w-6 h-4 RajawaliAirPng2"
                      src="/images/meals/rajawali.png"
                    />
                    <div className="flex items-center justify-start gap-2 ">
                      <div className="Bpn text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        BPN
                      </div>
                      <div className="text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        <MdOutlineArrowRightAlt size={20} />
                      </div>
                      <div className="Yia text-black text-xs font-semibold font-['Roboto'] leading-snug">
                        YIA
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1 ">
                    <div className=" text-neutral-500 text-xs font-normal font-['Roboto'] leading-none">
                      25 Jan 2024, 08:15 - 09:05 | 1h 50m
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0rem]">
              Meals
            </p>
            <MealsCard
              api="https://rajawali-production.up.railway.app/api/v1/meals"
              price={price}
              setPrice={setPrice}
            />
          </div>
        </BodyLayout>

        {/* Bottom Navbar */}
        <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-white rounded-t-lg flex justify-center items-center gap-x-12">
          {/* Filter */}
          <div className="inline-flex items-center self-stretch justify-between px-2 Frame1000000882 grow shrink basis-0">
            <div className="Frame1000000820 flex-col justify-start items-start gap-1.5 inline-flex">
              <div className="Total text-black text-sm font-semibold font-['Roboto'] leading-tight tracking-tight">
                Total
              </div>
              <div className="Idr146000 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">
                {numberToCurrency("IDR", price, true, false)}
              </div>
            </div>
            <div className=" w-32 h-8 px-16 py-3 bg-blue-500 rounded shadow justify-center items-center gap-2.5 flex hover:bg-blue-700">
              <button
                className="Primary text-stone-50 text-sm font-semibold font-['Roboto'] leading-tight tracking-tight"
                onClick={handleMealsClick}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </BookingProvider>
  );
};

export default Meals;
