import React from "react";
import Login from "./components/Login";
import Categories from "./components/Categories";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Mainpage from "./components/Mainpage";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="container-main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/mainpage" element={<Mainpage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
