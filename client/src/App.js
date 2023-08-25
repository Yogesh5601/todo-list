import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Update from "./components/Update";
import RootLayout from "./components/Layout";
import Note from "./components/Note";
import Dashbord from "./components/Dashbord"



const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashbord />} />
      <Route path="/notes" element={<Note />} />
      <Route path="update/:id" element={<Update />} />
    </Route>
  )
);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;