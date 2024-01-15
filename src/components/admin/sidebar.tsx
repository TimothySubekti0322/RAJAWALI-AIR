import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { CiAirportSign1 } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import Header from "./header";

const drawerWidth = 16;

interface Props {
  windows?: () => Window;
}

export default function Sidebar(props: Props) {
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const path = window.location.pathname;

  const selectedMenu = path.split("/")[2];

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const drawer = (
    <div className="relative h-full p-4">
      {/* Rajawali Air Logo and Title Section */}
      <div className="flex items-center w-full gap-x-4">
        <img
          src="/images/rajawali-air-logo.svg"
          alt="Rajawali Air Logo"
          className="w-10 h-10"
        />
        <p className="text-2xl font-bold text-[#1E90FF] cursor-default">
          Rajawali Air
        </p>
      </div>
      {/* Menu Section */}
      <div className="flex flex-col w-full mt-16">
        {/* Home */}
        <a
          className={`flex px-4 py-4 rounded-2xl  ${
            selectedMenu == "home"
              ? "bg-[#A4E0FF] text-[#1E90FF]"
              : "bg-white hover:bg-[#A4E0FF] text-[#B2B2B2] hover:text-[#1E90FF]"
          }`}
          href="/dashboard/home"
        >
          <FiHome className="w-6 h-6 mr-4 " />
          <p className="text-lg font-medium cursor-pointer">Home</p>
        </a>

        {/* Airport */}
        <a
          className={`flex px-4 py-4 rounded-2xl  ${
            selectedMenu == "airport"
              ? "bg-[#A4E0FF] text-[#1E90FF]"
              : "bg-white hover:bg-[#A4E0FF] text-[#B2B2B2] hover:text-[#1E90FF]"
          }`}
          href="/dashboard/airport"
        >
          <CiAirportSign1 className="w-6 h-6 mr-4" />
          <p className="text-lg font-medium cursor-pointer">Airport</p>
        </a>

        {/* Airplane */}
        <a
          className={`flex px-4 py-4 rounded-2xl  ${
            selectedMenu == "airplane"
              ? "bg-[#A4E0FF] text-[#1E90FF]"
              : "bg-white hover:bg-[#A4E0FF] text-[#B2B2B2] hover:text-[#1E90FF]"
          }`}
          href="/dashboard/airplane"
        >
          <IoAirplaneOutline className="w-6 h-6 mr-4" />
          <p className="text-lg font-medium cursor-pointer">Airplane</p>
        </a>

        {/* Flight */}
        <a
          className={`flex px-4 py-4 rounded-2xl ${
            selectedMenu == "flight"
              ? "bg-[#A4E0FF] text-[#1E90FF]"
              : "bg-white hover:bg-[#A4E0FF] text-[#B2B2B2] hover:text-[#1E90FF]"
          }`}
          href="/dashboard/flight"
        >
          <MdOutlineFlightTakeoff className="w-6 h-6 mr-4" />
          <p className="text-lg font-medium cursor-pointer">Flight</p>
        </a>

        {/* User */}
        <a
          className={`flex px-4 py-4 rounded-2xl  ${
            selectedMenu == "user"
              ? "bg-[#A4E0FF] text-[#1E90FF]"
              : "bg-white hover:bg-[#A4E0FF] text-[#B2B2B2] hover:text-[#1E90FF]"
          }`}
          href="/dashboard/user"
        >
          <FaRegUser className="w-6 h-6 mr-4" />
          <p className="text-lg font-medium cursor-pointer">User</p>
        </a>
      </div>

      {/* Logout */}
      <button
        className="absolute w-4/5 bottom-8 flex px-4 py-4 rounded-2xl bg-white hover:bg-[#FF8F86] hover:outline-[#FF8F86] focus:outline-[#FF8F86] text-[#B2B2B2] hover:text-[#BA2920]"
        onClick={logoutHandler}
      >
        <TbLogout2 className="w-6 h-6 mr-4" />
        <p className="text-lg font-medium cursor-pointer">Logout</p>
      </button>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <header className="fixed flex items-center w-full bg-white sm:hidden gap-x-6">
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex items-center justify-between grow">
            <Header />
          </div>
        </Toolbar>
      </header>
      <Box
        component="nav"
        sx={{ width: { sm: `${drawerWidth}rem` }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `${drawerWidth}rem`,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: `${drawerWidth}rem`,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
