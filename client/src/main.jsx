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
// level one
import LevelOneIntro from "./pages/levelOne/LevelOneIntro";
import LevelOneSecond from "./pages/levelOne/LevelOneSecond";
import LevelOneThird from "./pages/levelOne/LevelOneThird";
import LevelOneFourth from "./pages/levelOne/LevelOneFourth";
import LevelOneFifth from "./pages/levelOne/LevelOneFifth";
// level two
import LevelTwoIntro from "./pages/levelTwo/LevelTwoIntro"
import LevelTwoSecond from "./pages/levelTwo/LevelTwoSecond"
import LevelTwoThird from "./pages/levelTwo/LevelTwoThird";
import LevelTwoFourth from "./pages/levelTwo/LevelTwoFourth";
import LevelTwoFifth from "./pages/levelTwo/LevelTwoFifth";
// level three
import LevelThreeIntro from "./pages/levelThree/LevelThreeIntro";
import LevelThreeSecond from "./pages/levelThree/LevelThreeSecond";
import LevelThreeThird from "./pages/levelThree/LevelThreeThird";
import LevelThreeFourth from "./pages/levelThree/LevelThreeFourth";

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
  },
  // level one
  {
    path: "/level-one-intro",
    element: <LevelOneIntro />
  },
  {
    path: "/level-one-second",
    element: <LevelOneSecond />
  },
  {
    path: "/level-one-third",
    element: <LevelOneThird />
  },
  {
    path: "/level-one-fourth",
    element: <LevelOneFourth />
  },
  {
    path: "/level-one-fifth",
    element: <LevelOneFifth />
  },
  // level two
  {
    path: "/level-two-intro",
    element: <LevelTwoIntro />
  },
  {
    path: "/level-two-second",
    element: <LevelTwoSecond />
  },
  {
    path: "/level-two-third",
    element: <LevelTwoThird />
  },
  {
    path: "/level-two-fourth",
    element: <LevelTwoFourth />
  },
  {
    path: "/level-two-fifth",
    element: <LevelTwoFifth />
  },
  // level three
  {
    path: "/level-three-intro",
    element: <LevelThreeIntro />
  },
  {
    path: "/level-three-second",
    element: <LevelThreeSecond />
  },
  {
    path: "/level-three-third",
    element: <LevelThreeThird />
  },
  {
    path: "/level-three-fourth",
    element: <LevelThreeFourth />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
