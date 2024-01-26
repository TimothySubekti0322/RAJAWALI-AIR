import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import { FlightFacil } from "../../components/client/travelAddOns/flightFasil/FlightFacil";
import ExtraProtections from "../../components/client/travelAddOns/extraProtections/ExtraProtections";
import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TotalPriceDetailComponent from "../../components/client/totalPrice/TotalPriceDetailComponent";

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
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <div className="inline-flex items-center">
          <div className="flex-initial">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
          </div>
          <div className="flex-initial text-center text-stone-50 text-base font-bold font-['Roboto'] tracking-tight pl-[5.31rem]">
            <p className="text-white">Travel Add-ons</p>
          </div>
        </div>
      </HeaderLayout>

      <BodyLayout paddingBottomSize="5rem">
        <div className="inline-flex pt-[1rem] px-[1rem] flex-col">
          <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0.5rem]">
            Flight Facilities
          </p>
          <FlightFacil
            img1="/public/images/travel-add-ons/bag.png"
            textBold="Baggage"
            paraf="You can bring up to 20kg baggage per passenger. Are you sure this is enough?"
            img2="/public/images/travel-add-ons/tambah.png"
          />
          <FlightFacil
            img1="/public/images/travel-add-ons/seat.png"
            textBold="Seat Number"
            paraf="Baggage addition successfully selected.
            Tap to view or make changes."
            img2="/public/images/travel-add-ons/check.png"
          />
          <FlightFacil
            img1="/public/images/travel-add-ons/meal.png"
            textBold="In-flight Meals"
            paraf="Don’t let yourself go hungry during the flight.
            Enjoy the meals we have prepared for you."
            img2="/public/images/travel-add-ons/tambah.png"
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

      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-white rounded-t-sm flex justify-center items-center gap-x-12 mb-5">
        <div className="TotalPriceComponent w-96 h-24 p-4 bg-white rounded-tl rounded-tr border-t border-blue-500 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Frame1000000920 flex-col justify-start items-start gap-2 flex">
            <div className="Frame1000000919 w-80 justify-between items-center inline-flex">
              <div className="Frame1000000918 justify-start items-center gap-1 flex">
                <div className="Idr3204800 text-blue-500 text-base font-bold font-['Roboto'] leading-snug">
                  IDR 3.204.800
                </div>
                <div className="MingcuteDownLine w-5 h-5 justify-center items-center flex">
                  <div className="Group w-5 h-5 relative"></div>
                </div>
              </div>
              <div className="Frame1000000801 justify-start items-center gap-1 flex">
                <div className="PepiconsPencilCoinsCircle w-3 h-3 p-px justify-center items-center flex">
                  <div className="Group w-3 h-3 relative text-blue-500 bottom-4 right-20">
                    <CardActions disableSpacing className="mt-[-0.5rem]">
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon className="text-blue-500" />
                      </ExpandMore>
                    </CardActions>
                  </div>
                </div>
                <div className="Get10000LoyaltyPoints text-right text-blue-500 text-xs font-medium font-['Roboto'] leading-none">
                  Get 10000 Loyalty Points
                </div>
              </div>
            </div>
            <button>
              <div className="NoIconFullWidth w-80 px-16 py-3 bg-blue-500 rounded shadow justify-center items-center gap-2.5 inline-flex">
                <div className="Primary text-stone-50 text-base font-semibold font-['Roboto'] leading-none">
                  Continue to Payment
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAddOns;
