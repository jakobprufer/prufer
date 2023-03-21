import "./Sass/Main.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Layouts/Page";
import Error from "./Pages/Error";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page location="0" />,
      errorElement: <Error />,
    },
    {
      path: "/music",
      element: <Page location="1" />,
      errorElement: <Error />,
    },
    {
      path: "/design",
      element: <Page location="2" />,
      errorElement: <Error />,
    },
    {
      path: "/dj",
      element: <Page location="3" />,
      errorElement: <Error />,
    },
    {
      path: "/video",
      element: <Page location="4" />,
      errorElement: <Error />,
    },
    {
      path: "/photo",
      element: <Page location="5" />,
      errorElement: <Error />,
    },
    {
      path: "/thoughts",
      element: <Page location="6" />,
      errorElement: <Error />,
    },
    {
      path: "/inspiration",
      element: <Page location="7" />,
      errorElement: <Error />,
    },
    {
      path: "/inspiration/yo",
      element: <Page location="7" />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
