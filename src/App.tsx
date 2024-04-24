import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Listing from './components/listing/listing.component';
import Profile from './components/profile/profile.component';

import './App.scss';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/listing"} replace />,
  },
  {
    path: "/listing",
    element: <Listing />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
