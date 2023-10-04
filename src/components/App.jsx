import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectIngredient from "./SelectIngredient/SelectIngredient";
import SelectRecipe from "./SelectRecipe/SelectRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ingredients" element={<SelectIngredient />} />
        <Route path="/recipes" element={<SelectRecipe />} />
        <Route path="/" element={<SelectIngredient />} />
      </Routes>
    </Router>
  );
}

export default App;
