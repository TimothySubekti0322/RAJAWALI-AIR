import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
// import { GoDotFill } from "react-icons/go";

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

interface Props {
  textHeader: string;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExtraProtections = ({ textHeader }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="mb-3">
      <CardContent>
        <div className=" w-72 h-28 flex-col justify-start items-start gap-3 inline-flex">
          <div className="FullProtection text-black text-sm font-bold font-['Roboto'] leading-normal">
            {textHeader}
          </div>
          <div className=" w-72 justify-between items-center inline-flex">
            <div className=" flex-col justify-start items-start gap-2 inline-flex">
              <div className=" w-60 h-8 relative">
                {/* <div className="text-black left-">
                <GoDotFill />
                </div> */}
                <div className=" left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                  Personal accident
                </div>
                <div className=" left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                  Covers up to IDR 500.000.000
                </div>
              </div>
              <div className=" w-60 h-8 relative">
                <div className="TripCancellationDueToSpecificReasons left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                  Trip cancellation (due to specific reasons)
                </div>
                <div className=" left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                  Covers up to IDR 30.000.000
                </div>
              </div>
            </div>
            <div className=" w-5 h-5 justify-center items-center flex">
              <Checkbox {...label} defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing className="mt-[-0.5rem]">
        <div className="text-blue-500 text-xs font-semibold font-['Roboto'] leading-snug">
          More Details
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="Frame1000000916 w-72 h-36 flex-col justify-start items-start gap-2 inline-flex">
            <div className="Group2089 w-60 h-8 relative">
              <div className="BaggageLossOrDamage left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                Baggage loss or damage
              </div>
              <div className="CoversUpToIdr5000000 left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                Covers up to IDR 5.000.000
              </div>
            </div>
            <div className="Group2090 w-60 h-8 relative">
              <div className="BaggageDelay left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                Baggage delay
              </div>
              <div className="CoversUpToIdr3000000 left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                Covers up to IDR 3.000.000
              </div>
            </div>
            <div className="Group2091 w-72 h-8 relative">
              <div className="CancellationByPassengerDueToSpecificReason left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                Cancellation by passenger due to specific reason
              </div>
              <div className="CoversUpToIdr100000000Ticket left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                Covers up to IDR 100.000.000/ticket
              </div>
            </div>
            <div className="Group2092 w-60 h-8 relative">
              <div className="MissedTravelConnection left-0 top-0 absolute text-black text-xs font-medium font-['Roboto'] leading-none">
                Missed travel connection
              </div>
              <div className="CoversUpToIdr5000000 left-[18px] top-[17px] absolute text-neutral-500 text-xs font-medium font-['Roboto'] leading-none">
                Covers up to IDR 5.000.000
              </div>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExtraProtections;
