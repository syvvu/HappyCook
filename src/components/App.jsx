import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectItems from "./SelectItems/SelectItems";
import SelectTab from "./selectTab/SelectTab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ingredients" element={<SelectItems />} />
        <Route path="/recipes" element={<SelectTab />} />
        <Route path="/" element={<SelectItems />} />
      </Routes>
    </Router>
  );
}

export default App;
