import React from "react";
import Login from "./components/Login";
import Categories from "./components/Categories";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
