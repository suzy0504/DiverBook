import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Cook from "../pages/Cook";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cook" element={<Cook />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
