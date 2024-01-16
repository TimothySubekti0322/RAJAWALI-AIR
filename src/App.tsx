import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Flight from "./pages/admin/flight/Flight";
import AirportDashboard from "./pages/admin/airport/AirportDashboard";
import Home from "./pages/client/Home";

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
    path: "/dashboard/flight",
    element: <Flight />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
