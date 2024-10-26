import React from "react";
import "./styles.css";
import EventList from "./components/EventList";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Error from "./components/Error";
import LoginHeader from "./components/LoginHeader";
import LoginPage from "./components/LoginPage"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/mainpage",
      element: <MainPage />,
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
      path:"/Loginpage",
      element:<LoginPage/>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
