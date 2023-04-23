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
import Emergencies from "./components/Emergencies";
import Helpline1 from "./components/Helpline1";
import Helpline2 from "./components/Helpline2";
import Helpline3 from "./components/Helpline3";
import Helpline4 from "./components/Helpline4";
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
            <Route path="/emergency" element={<Emergencies />} />
            <Route path="/helpline1" element={<Helpline1 />} />
            <Route path="/helpline2" element={<Helpline2 />} />
            <Route path="/helpline3" element={<Helpline3 />} />
            <Route path="/helpline4" element={<Helpline4 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
