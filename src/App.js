import Navbar from './components/Navbar';
import Label from './components/label';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enable or not 
  const [alert, setAlert] = useState(null) //made a state for alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = "#130a26";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode ('light')
      document.body.style.backgroundColor = "#b6dcf0";
      showAlert("light mode has been enabled", "success");
    }
  };

  return <>

  <Router>
  <Navbar title= "Word Counter" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert} />
    
    
    <Routes>
      <Route exact path="/" element={<Label heading="Enter Your Text To Transform Below Mode.. " mode={mode} showAlert={showAlert} />}/>
    <Route exact path="/about" element={<About mode=
    {mode} />} />

    </Routes>
    
  </Router>
  <Footer mode={mode} />

  </>
}

export default App;
