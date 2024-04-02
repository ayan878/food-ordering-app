import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout >HOME Page</Layout>} />
      </Routes>
    </Router>
  );
}
