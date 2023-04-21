import React from "react";
import Login from "./Login";
// import Signup from "./Signup";
import Categories from "./components/Categories";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <Login/>
      <Navbar/>
      <Categories />
      <Footer/>
    </div>
  );
}

export default App;
