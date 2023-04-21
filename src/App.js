import React from "react";
// import Home from "./Home"
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      <Categories />
    </div>
  );
}

export default App;
