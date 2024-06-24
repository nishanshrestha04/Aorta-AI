import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import Doctor from "./Components/Doctor";

const App = () => {
  return (
    <>
    {/* <About/> */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </>
  );
};

export default App;