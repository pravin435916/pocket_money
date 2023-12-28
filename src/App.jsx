import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Whyus from "./components/Whyus";
import Reviews from "./components/Reviews";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Users from "./components/Users";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Whyus" element={<Whyus />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
