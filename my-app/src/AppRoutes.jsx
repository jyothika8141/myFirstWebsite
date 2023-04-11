import React from "react";

import Home from "./components/Page1/Home";
import Register from "./components/Register/Register";
import Search from "./components/Page2/Search";

import { AnimatePresence } from "framer-motion/dist/framer-motion";

import {Routes, Route, useLocation} from "react-router-dom";

export default function AppRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </AnimatePresence>
    )
       
}

