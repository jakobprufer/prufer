import "./Sass/Main.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Layouts/Page";
import Error from "./Pages/Error";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import Overview from "./Pages/Overview";
import JakobPrufer from "./Pages/JakobPrufer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/music",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/music/jakobprufer",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <JakobPrufer />,
        },
      ],
    },
    {
      path: "/design",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/dj",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
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
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/thoughts",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/inspiration",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
    {
      path: "/music/jakobprufer",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Overview />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
