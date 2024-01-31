import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import { FlightFacil } from "../../components/client/travelAddOns/flightFasil/FlightFacil";
import ExtraProtections from "../../components/client/travelAddOns/extraProtections/ExtraProtections";
import TotalPriceDetailComponent from "../../components/client/totalPrice/TotalPriceDetailComponent.tsx";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TravelAddOns = () => {
  const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false);
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <HeaderFill title="Travel Add-ons" />
      </HeaderLayout>

      <BodyLayout paddingBottomSize="5rem">
        <div className="inline-flex pt-[1rem] px-[1rem] flex-col">
          <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0.5rem]">
            Flight Facilities
          </p>
          <FlightFacil
            img1="/images/travel-add-ons/bag.png"
            textBold="Baggage"
            paraf="You can bring up to 20kg baggage per passenger. Are you sure this is enough?"
            img2="/images/travel-add-ons/tambah.png"
          />
          <FlightFacil
            img1="/images/travel-add-ons/seat.png"
            textBold="Seat Number"
            paraf="Baggage addition successfully selected.
            Tap to view or make changes."
            img2="/images/travel-add-ons/check.png"
          />
          <FlightFacil
            img1="/images/travel-add-ons/meal.png"
            textBold="In-flight Meals"
            paraf="Don’t let yourself go hungry during the flight.
            Enjoy the meals we have prepared for you."
            img2="/images/travel-add-ons/tambah.png"
          />

          <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0.5rem] mt-[1.5rem]">
            Extra Protections
          </p>

          <ExtraProtections textHeader="Travel Insurance" price="100.000" />
          <ExtraProtections textHeader="Baggage Insurance" price="13.500" />
          <ExtraProtections
            textHeader="Flight Delay Insurance"
            price="60.000"
          />
          <div>adsfsf</div>
        </div>
      </BodyLayout>

      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] bg-white rounded-t-sm flex justify-center items-center gap-x-12">
        <div className=" w-96 p-2 bg-white rounded-tl rounded-tr border-t border-blue-500 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="flex flex-col items-start justify-start gap-2 ">
            <div className="inline-flex items-center justify-between w-80">
              <div className="flex items-center justify-start ">
                <div className=" text-blue-500 text-base font-bold font-['Roboto'] leading-snug">
                  IDR 3.204.800
                </div>
                <ExpandMore
                  expand={showTotalPrice}
                  onClick={() => setShowTotalPrice(!showTotalPrice)}
                  aria-expanded={showTotalPrice}
                  aria-label="show more"
                >
                  <ExpandMoreIcon className="text-blue-500" />
                </ExpandMore>
                {/*<button className={'text-black'} onClick={() => setShowTotalPrice(!showTotalPrice)}>Test</button>*/}
                <div className="flex items-center justify-center w-5 h-5 ">
                  <div className="relative w-5 h-5 "></div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-1 ">
                <div className="flex items-center justify-center w-3 h-3 p-px ">
                  <div className="relative w-3 h-3 "></div>
                </div>
                <div className=" text-right text-blue-500 text-xs font-medium font-['Roboto'] leading-none">
                  Get 10000 Loyalty Points
                </div>
              </div>
            </div>
            {showTotalPrice && (
              <div className="w-full ">
                <TotalPriceDetailComponent />
              </div>
            )}
            <button className=" w-80 px-16 py-3 bg-blue-500 rounded shadow justify-center items-center gap-2.5 inline-flex hover:bg-blue-600 focus:outline-none focus:shadow-outline">
              <button
                className="Primary text-stone-50 text-base font-semibold font-['Roboto'] leading-none"
                onClick={() => (window.location.href = "/continuePayment")}
              >
                Continue to Payment
              </button>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAddOns;
