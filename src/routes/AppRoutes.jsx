import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Duvets from "../pages/Duvets";
import FlatSheets from "../pages/FlatSheets";
import FittedSheets from "../pages/FittedSheets";
import Layout from "../components/Layout";
import Quilts from "../pages/Quilts";
import Products from "../pages/Products";
import DuvetCovers from "../pages/DuvetCovers";
import Pillowcases from "../pages/Pillowcases";
import Sheets from "../pages/Sheets";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/duvets" element={<Duvets />} />
        <Route path="/duvet-covers" element={<DuvetCovers />} />
        <Route path="/pillowcases" element={<Pillowcases />} />
        <Route path="/sheets" element={<Sheets />} />
        <Route path="/flat-sheets" element={<FlatSheets />} />
        <Route path="/fitted-sheets" element={<FittedSheets />} />
        <Route path="/quilts" element={<Quilts />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
