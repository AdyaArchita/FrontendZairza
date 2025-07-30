import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalDesign from "./pages/FinalDesign.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FinalDesign />} />
      </Routes>
    </Router>
  );
};

export default App;
