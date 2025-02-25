import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        This is style
      </div>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Dashboard</button>
      <button onClick={() => navigate("/landing")}>Landing</button>
    </>
  );
}
