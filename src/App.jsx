import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




// import Top_line from './navbar/one_line_top';

// import MainComponent from './navbar/main';
import MainComponent from './navbar/main';
import Getstarted_main from './navbar/get_startedd';

function App() {
  return (
    <Router>

    <Routes>
    <Route path="/" element={<MainComponent />} />
    <Route path="Get_started" element={<Getstarted_main />} />


    </Routes>
  </Router>
  );
}

export default App;
