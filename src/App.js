import React from "react";
import "./styles.css";
import EventList from "./components/EventList";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Error from "./components/Error";
import LoginHeader from "./components/LoginHeader";
import LoginPage from "./components/LoginPage";
import Discover from "./components/Discover";
import EventLocation from "./components/EventLocation";
import { SearchProvider } from "./utils/context";
import DanceCardList from "./components/DanceCardList";
import MusicEventComponent from "./components/MusicEvenComponent";
import ArtExhibitionComponent from "./components/ArtExibitionComponent";
import TechInnovationComponent from "./components/TechInnovationComponent";
import SportEventComponent from "./components/SportEventComponent";
import FoodAndDrinksComponent from "./components/FoodAndDrinkComponent";
import WellnessFitnessComponent from "./components/WellnessFitnessComponent";
import OutdoorAdventureComponent from "./components/OutdoorAdventureComponent";
import Trending from "./components/Trending";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/Login",
      element: <LoginPage />,
    },

    {
      path: "/error",
      element: <Error />,
    },

    {
      path: "*", 
      element: <Error />,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/location", 
      element: <EventLocation />,
    },
    {
      path: "/dance", 
      element: <DanceCardList />,
    },
    {
      path: "/music", 
      element: <MusicEventComponent />,
    },
    {
      path: "/art", 
      element: <ArtExhibitionComponent />,
    },
    {
      path: "/tech", 
      element: <TechInnovationComponent />,
    },
    {
      path: "/sport", 
      element: <SportEventComponent />,
    },
    {
      path: "/food", 
      element: <FoodAndDrinksComponent />,
    },
    {
      path: "/wellness", 
      element: <WellnessFitnessComponent />,
    },
    {
      path: "/outdoor", 
      element: <OutdoorAdventureComponent />,
    },
    {
      path: "/header", 
      element: <Header />,
    },
    {
      path: "/event", 
      element: <EventList />,
    },
    {
      path:"/trending",
      element:<Trending/>
    }
  ]);

  return (
    <SearchProvider>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </SearchProvider>
  );
}

export default App;
