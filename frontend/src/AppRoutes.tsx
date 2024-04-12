import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import Layout from "./layouts/Layout";


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage/>
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;


// import HomePage from "@/pages/HomePage";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Layout from "./layouts/Layout";
// import Hero from "./components/Hero";
// import AuthCallbackPage from "./pages/AuthCallbackPage";

// function AppRoutes() {
//   const router = createBrowserRouter([
//     {
//       element: <Layout />,
//       // path:"/",
//       children: [
//         {
//           path: "/",
//           element: <HomePage />,
//           children: [{ element: <Hero /> }],
//         },
//         { path: "*", element: <HomePage /> },
//         {
//           path: "/auth-callback",
//           element: <AuthCallbackPage />,
//         },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router}></RouterProvider>;
// }

// export default AppRoutes;
