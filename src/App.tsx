import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Flight from "./pages/admin/flight/Flight";
import AirportDashboard from "./pages/admin/airport/AirportDashboard";
import AddAirport from "./pages/admin/airport/AddAirport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing Page</div>,
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
    // element: <div>Add Airport Page</div>,
    element: <AddAirport/>,
  },
  {
    path: "/dashboard/airport/edit/:id",
    element: <div>Edit Airport Page</div>,
  },
  {
    path: "/dashboard/flight",
    element: <Flight />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
