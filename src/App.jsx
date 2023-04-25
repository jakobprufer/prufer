import "./Sass/Main.sass";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Page from "./Layouts/Page";
import Error from "./Pages/Error";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import Overview from "./Pages/Overview";
import JakobPrufer from "./Pages/JakobPrufer";
import EastCoast from "./Pages/EastCoast";
import Sydenham from "./Pages/Sydenham";
import LondonPeople from "./Pages/LondonPeople";
import CardioGuard from "./Pages/CardioGuard";
import Maux from "./Pages/Maux";
import Pulse from "./Pages/Pulse";
import FacePerception from "./Pages/FacePerception";
import Upbound from "./Pages/Upbound";
import JAV from "./Pages/JAV";
import AiDesign from "./Pages/AiDesign";
import Luxury from "./Pages/Luxury";
import Alles from "./Pages/Alles";
import BerlinEdit from "./Pages/BerlinEdit";
import LondonEdit from "./Pages/LondonEdit";
import Off21Video from "./Pages/Off21Video";
import SupasilvaTeaser from "./Pages/SupasilvaTeaser";
import Sets from "./Pages/Sets";
import Off from "./Pages/Off";
import Turntandable from "./Pages/Turntandable";
import MusicProduction from "./Pages/MusicProduction";

const UXBlog = () => {
  window.location.href = "https://pruferux.com";
  return null;
};

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
      path: "/ux",
      element: <UXBlog />,
      errorElement: <Error />,
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
      path: "/music/musicproduction",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <MusicProduction />,
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
      path: "/design/cardioguard",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <CardioGuard />,
        },
      ],
    },
    {
      path: "/design/maux",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Maux />,
        },
      ],
    },
    {
      path: "/design/pulse",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Pulse />,
        },
      ],
    },
    {
      path: "/design/faceperception",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <FacePerception />,
        },
      ],
    },
    {
      path: "/design/upbound",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Upbound />,
        },
      ],
    },
    {
      path: "/design/jav",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <JAV />,
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
      path: "/dj/sets",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Sets />,
        },
      ],
    },
    {
      path: "/dj/off",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Off />,
        },
      ],
    },
    {
      path: "/dj/turntandable",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Turntandable />,
        },
      ],
    },
    {
      path: "/video",
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
      path: "/video/alles",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Alles />,
        },
      ],
    },
    {
      path: "/video/berlinedit",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <BerlinEdit />,
        },
      ],
    },
    {
      path: "/video/londonedit",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <LondonEdit />,
        },
      ],
    },
    {
      path: "/video/off21video",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Off21Video />,
        },
      ],
    },
    {
      path: "/video/supasilvateaser",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <SupasilvaTeaser />,
        },
      ],
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
      path: "/photo/eastcoast",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <EastCoast />,
        },
      ],
    },
    {
      path: "/photo/sydenham",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Sydenham />,
        },
      ],
    },
    {
      path: "/photo/londonpeople",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <LondonPeople />,
        },
      ],
    },
    {
      path: "/writing",
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
      path: "/writing/aidesign",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <AiDesign />,
        },
      ],
    },
    {
      path: "/writing/luxury",
      element: <Page />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Luxury />,
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
