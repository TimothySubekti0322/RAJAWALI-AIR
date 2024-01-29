import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Admin Pages
import AirportDashboard from "./pages/admin/airport/AirportDashboard";
import AddAirport from "./pages/admin/airport/AddAirport";
import EditAirport from "./pages/admin/airport/EditAirport";
import AirplaneDashboard from "./pages/admin/airplane/AirplaneDashboard";
import FlightDashboard from "./pages/admin/flight/FlightDashboard";
import FlightForm from "./pages/admin/flight/FlightForm";
import Tes from "./pages/tes/index"
import Tes2 from "./pages/tes/index2";

// Client Pages
import Home from "./pages/client/Home";
import TicketList from "./pages/client/TicketList";

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
    path: "/ticketList",
    element: <TicketList />,
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
    element: <div>Add Airplane Page</div>,
  },
  {
    path: "/dashboard/airplane/edit/:id",
    element: <div>Edit Airplane Page</div>,
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
    path: "/tes",
    element: <Tes />,
  },
  {
    path: "/tes2",
    element: <Tes2 />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
