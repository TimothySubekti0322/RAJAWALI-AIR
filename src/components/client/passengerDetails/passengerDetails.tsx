import * as React from "react";
import { Global } from "@emotion/react";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IoClose } from "react-icons/io5";
import RadioButton from "./radioButton";
import { FaChevronRight } from "react-icons/fa";

const drawerBleeding = 0;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 60,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 30px)",
}));

interface PassengerDetailProps {
    index: number,
    ageGroup: string,
}

export default function SwipeableEdgeDrawer(props: Readonly<Props & PassengerDetailProps>) {
  const themes = useTheme();
  const { window, index, ageGroup } = props;
  const [open, setOpen] = React.useState(false);

  const [honorofic, setHonorofic] = React.useState("other");
  const [name, setName] = React.useState("");

  const handleSave = () => {
    console.log(honorofic, name);
    setOpen(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(70%)`,
            overflow: "visible",
            width: 360,
            [themes.breakpoints.down(600)]: {
              width: "100%",
            },
            margin: "auto",
          },
        }}
      />
        <div className={'my-4 w-full mt-0 drop-shadow-md'}>
            <div
                className={'flex w-full justify-between rounded-lg bg-white w-full px-3 py-1 mt-1 text-black drop-shadow-md'}>
                <div className={'w-full'}>
                    {index === 0 && (
                        <>
                            <div className={'flex gap-3 mt-2 items-center justify-between'}>
                                <span className={'text-xs text-[#757575]'}>Same as contact details</span>
                                <input type="checkbox" className="toggle toggle-info toggle-sm"/>
                            </div>
                            <div className={'w-full h-[1px] bg-[#757575] my-3'}>
                            </div>
                        </>
                    )}

                    <div className={'my-2 items-center w-full flex justify-between'}>
                        <span
                            className={'text-[#1E90FF] font-semibold text-sm'}>Passenger {index + 1} ({ageGroup})</span>
                        {/*<PassengerDetails  />*/}
                        <Box sx={{ textAlign: "center", pt: 1, borderRadius: "8px 8px 0 0", backgroundColor: 'white' }}>
                            <Button onClick={toggleDrawer(true)}>
                                <FaChevronRight className="text-[#1E90FF]" />
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            height: "100%",
          }}
        >
          <Puller />
          <div className="flex justify-center w-full h-full h-center pt-[14px] relative ">
            <div className="flex flex-col w-full px-4 pt-4">
              <button onClick={toggleDrawer(false)}>
                <IoClose className="text-[#757575] text-2xl" />
              </button>
              <p
                className="mt-4 font-semibold text-black"
                style={{ userSelect: "none" }}
              >
                Passenger Details
              </p>
              <p
                className="mt-6 text-sm font-semibold text-black"
                style={{ userSelect: "none" }}
              >
                Passenger Info
              </p>
              <p
                className="mt-2 text-xs text-[#757575]"
                style={{ userSelect: "none" }}
              >
                Make sure that the passenger’s name is exactly as written in the
                government issued Id/Passport/Driving License. Avoid any
                mistake.
              </p>
              <div className="flex mt-4">
                <RadioButton value={honorofic} setValue={setHonorofic} />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-2 py-3 bg-white rounded-md border-[1.5px] border-[#1E90FF] text-xs"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <p className="text-[0.625rem] text-[#505050] mt-2">
                Filled based on ID/passport/driver’s license (without
                <br />
                punctuation or degree).
              </p>
              <button
                className="bg-[#1E90FF] w-full text-white rounded-md py-2 hover:bg-[#0C70DD] mt-[4.5rem]"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        ></StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
