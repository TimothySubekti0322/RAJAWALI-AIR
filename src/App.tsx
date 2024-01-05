import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Flight from "./pages/admin/flight/Flight";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing Page</div>,
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
    path: "/dashboard/flight",
    element: <Flight />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
