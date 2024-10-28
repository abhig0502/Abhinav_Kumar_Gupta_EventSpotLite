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
      path: "*", // Catch-all route for undefined paths
      element: <Error />,
    },
    {
      path: "/discover", // Catch-all route for undefined paths
      element: <Discover />,
    },
    {
      path: "/location", // Catch-all route for undefined paths
      element: <EventLocation />,
    },
    {
      path: "/header", // Catch-all route for undefined paths
      element: <Header />,
    },
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
