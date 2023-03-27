import "./Sass/Main.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Layouts/Page";
import Error from "./Pages/Error";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/music",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/design",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/dj",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/video",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/photo",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/thoughts",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/inspiration",
      element: <Page />,
      errorElement: <Error />,
    },
    {
      path: "/music/jakobprufer",
      element: <Page />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
