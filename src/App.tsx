import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Listing from './components/listing/listing.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/listing"} replace />,
  },
  {
    path: "/listing",
    element: <Listing />,
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
