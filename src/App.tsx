import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FlightDashboard from "./pages/admin/flight/FlightDashboard";

import Home from "./pages/client/Home";
import AirportDashboard from "./pages/admin/airport/AirportDashboard";
import AirplaneDashboard from "./pages/admin/airplane/AirplaneDashboard";

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
    path: "/dashboard/airport",
    element: <AirportDashboard />,
  },
  {
    path: "/dashboard/airport/add",
    element: <div>Add Airport Page</div>,
  },
  {
    path: "/dashboard/airport/edit/:id",
    element: <div>Edit Airport Page</div>,
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
    element: <div>Add Flight Page</div>,
  },
  {
    path: "/dashboard/flight/edit/:id",
    element: <div>Edit Flight Page</div>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
