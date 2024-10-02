import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CoverScreen from "./pages/CoverScreen";
import CharacterSelect from "./pages/CharacterSelect";
import Story from "./pages/Story";
import StoryThree from "./pages/StoryThree";
import StoryFour from "./pages/StoryFour";
import StoryFive from "./pages/StoryFive";
import StoryTwo from "./pages/StoryTwo";
import StorySix from "./pages/StorySix";
import StorySeven from "./pages/StorySeven";
import StoryEight from "./pages/StoryEight";
import StoryNine from "./pages/StoryNine";
import HomeScreen from "./pages/HomeScreen";
import Map from "./pages/Map";
import Learn from "./pages/Learn";
import MissionNasa from "./pages/MissionNasa";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CoverScreen />,
  },
  {
    path: "/character-selection",
    element: <CharacterSelect />,
  },
  {
    path: "/story/:character",
    element: <Story />,
  },
  {
    path: "/story-two",
    element: <StoryTwo />,
  },
  {
    path: "/story-three",
    element: <StoryThree />,
  },
  {
    path: "/story-four",
    element: <StoryFour />,
  },
  {
    path: "/story-five",
    element: <StoryFive />,
  },
  {
    path: "/story-six",
    element: <StorySix />,
  },
  {
    path: "/story-seven",
    element: <StorySeven />,
  },
  {
    path: "/story-eight",
    element: <StoryEight />,
  },
  {
    path: "/story-nine",
    element: <StoryNine />,
  },
  {
    path: "/home-screen",
    element: <HomeScreen />
  },
  {
    path: "/game-map",
    element: <Map />
  },
  {
    path: "/learn-page",
    element: <Learn />
  },
  {
    path: "/nasa-mission",
    element: <MissionNasa />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
