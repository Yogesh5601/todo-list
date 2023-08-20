import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateArea from "./components/CreateArea";
import Update from "./components/Update";
import Layout from "./components/Layout";
import Note from "./components/Note";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       { path: "/createarea", element: <CreateArea /> },
//       { path: "/notes", element:<Note />  },
//       { path: "/update/:id", element: <Update /> },
//     ],
//   },
// ]);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="createArea" element={<CreateArea />} />
            <Route path="/notes" element={<Note />} />
            <Route path="update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </>
  );
};

export default App;
