import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import WhyAuremet from "../pages/WhyAuremet";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why_auremet" element={<WhyAuremet standalone />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
