// import logo from './logo.svg';

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [navToogleText, setNavToogleText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setNavToogleText("Disable Dark mode");
      showAlert("Dark Mode has been enabled", "Success");
      document.body.style.backgroundColor = "#28294c";
    } else {
      setMode("light");
      setNavToogleText("Enable Dark mode");
      showAlert("Light Mode has been enabled", "Success");
      document.body.style.backgroundColor = "white";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="My App"
          mode={mode}
          toggleMode={toggleMode}
          navToogleText={navToogleText}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text"
                mode={mode}
                toggleMode={toggleMode}
              />
            }
          />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
