import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Admin Pages
import AirportDashboard from "./pages/admin/airport/AirportDashboard";
import AddAirport from "./pages/admin/airport/AddAirport";
import EditAirport from "./pages/admin/airport/EditAirport";
import AirplaneDashboard from "./pages/admin/airplane/AirplaneDashboard";
import FlightDashboard from "./pages/admin/flight/FlightDashboard";
import FlightForm from "./pages/admin/flight/FlightForm";
import AddAirplane from "./pages/admin/airplane/AddAirplane";
import EditAirplane from "./pages/admin/airplane/EditAirplane";

// Client Pages
import Home from "./pages/client/Home";
// import TicketList from "./pages/client/TicketList";
import PaymentMethod from "./pages/client/PaymentMethod";
import BaggageDepart from "./pages/client/BaggageDepart";
import Meals from "./pages/client/Meals";
import SelectedMethod from "./pages/client/SelectedMethod";
import ContinuePayment from "./pages/client/ContinuePayment";
import FillDetailInfo from "./pages/client/FillDetailInfo";
// import SelectedFlight from "./pages/client/SelectedFlight";
import History from "./pages/client/History";
import EmptyHistory from "./pages/client/EmptyHistory";
import TravelAddOns from "./pages/client/TravelAddOns";
import SearchTestPage from "./pages/client/SearchTestPage";
import ChooseTicket from "./pages/client/ChooseTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
  {
    path: "/register",
    element: <div>Register Page</div>,
  },
  {
    path: "chooseTicket",
    element: <ChooseTicket />,
  },
  // {
  //   path: "/ticketList",
  //   element: <TicketList />,
  // },
  // {
  //   path: "/selectedFlight",
  //   element: <SelectedFlight />,
  // },
  {
    path: "/fillDetailInformation",
    element: <FillDetailInfo />,
  },
  {
    path: "/baggageDepart",
    element: <BaggageDepart />,
  },
  {
    path: "/paymentMethod",
    element: <PaymentMethod />,
  },
  {
    path: "/continuePayment",
    element: <ContinuePayment />,
  },
  {
    path: "/selectedMethod",
    element: <SelectedMethod />,
  },
  {
    path: "/meals",
    element: <Meals />,
  },
  {
    path: "/travelAddOns",
    element: <TravelAddOns />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/history-empty",
    element: <EmptyHistory />,
  },
  {
    path: "/dashboard/airport",
    element: <AirportDashboard />,
  },
  {
    path: "/dashboard/airport/add",
    element: <AddAirport />,
  },
  {
    path: "/dashboard/airport/edit/:id",
    element: <EditAirport />,
  },
  {
    path: "/dashboard/airplane",
    element: <AirplaneDashboard />,
  },
  {
    path: "/dashboard/airplane/add",
    element: <AddAirplane />,
  },
  {
    path: "/dashboard/airplane/edit/:id",
    element: <EditAirplane />,
  },
  {
    path: "/dashboard/flight",
    element: <FlightDashboard />,
  },
  {
    path: "/dashboard/flight/add",
    element: <FlightForm />,
  },
  {
    path: "/dashboard/flight/edit/:id",
    element: <FlightForm />,
  },
  {
    path: "/search-test",
    element: <SearchTestPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
