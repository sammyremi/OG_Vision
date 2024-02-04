import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Screenshots from "./pages/Screenshots";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>You have a top class Error</h1>,
      children: [
        {
          index: "true",
          element: <Dashboard />,
        },
        {
          path: "screenshots",
          element: <Screenshots />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
