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
import PaymentMethod from "./pages/client/PaymentMethod";
import BaggageDepart from "./pages/client/BaggageDepart";
import Meals from "./pages/client/Meals";
import SelectedMethod from "./pages/client/SelectedMethod";
import ContinuePayment from "./pages/client/ContinuePayment";
import FillDetailInfo from "./pages/client/FillDetailInfo";
import History from "./pages/client/History";
import EmptyHistory from "./pages/client/EmptyHistory";
import TravelAddOns from "./pages/client/TravelAddOns";
import SearchTestPage from "./pages/client/SearchTestPage";
import ChooseTicket from "./pages/client/ChooseTicket";
import PendingPurchase from "./pages/client/PendingPurchase.tsx";
import SuccessPurchase from "./pages/client/SuccessPurchase.tsx";
import HistorySuccess from "./components/client/history/HistorySuccess.tsx";
import HistoryCancelled from "./components/client/history/HistoryCancelled.tsx";
import HistoryPending from "./components/client/history/HistoryPending.tsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerificationOTP from "./pages/auth/VerificationOTP";
import ChooseSeat from "./pages/client/ChooseSeat.tsx";
import HomeDash from "./pages/admin/home/HomeDash";
import DetailTicket from "./pages/admin/home/DetailTicket";
// import LoginClient from "./pages/client/loginClient";
// import LoginAdmin from "./pages/admin/loginAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login/admin",
    element: <Login user="admin" />,
  },
  {
    path: "/login",
    element: <Login user="client" />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "verifyOTP",
    element: <VerificationOTP />,
  },
  {
    path: "/chooseTicket",
    element: <ChooseTicket />,
  },
  {
    path: "/fillDetailInformation",
    element: <FillDetailInfo />,
  },
  {
    path: "/chooseSeat",
    element: <ChooseSeat />,
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
    path: "/dashboard/home",
    element: <HomeDash />,
  },
  {
    path: "/dashboard/home/ticket-details/:id",
    element: <DetailTicket />,
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
  {
    path: "/pendingPurchase",
    element: <PendingPurchase />,
  },
  {
    path: "/successPurchase",
    element: <SuccessPurchase />,
  },
  {
    path: "/historySuccess",
    element: <HistorySuccess />,
  },
  {
    path: "/historyCancelled",
    element: <HistoryCancelled />,
  },
  {
    path: "/historyPending",
    element: <HistoryPending />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
