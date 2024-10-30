import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App";
// page components

import Home from "./pages_cpnts/Home";
import About from "./pages_cpnts/About";
import Article from "./pages_cpnts/Article";

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Lorem Elsass ipsum Salut bisamme",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];

type Data = typeof allData[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};


// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          const idAsInt = parseInt(params.id ?? "0");

          return getSomeData(idAsInt);
        },
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}