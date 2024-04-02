// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./layouts/Layout";
// import HomePage from "./pages/HomePage";

// export default function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><HomePage/></Layout>} />
//       </Routes>
//     </Router>
//   );
// }
import HomePage from "@/pages/HomePage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path:"/",
      children: [
        {
          path: "/",
          element: <HomePage />,
          children:[{element:<Hero/>}]
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;
