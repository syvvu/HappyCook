import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectIngredient from "./SelectIngredient/SelectIngredient";
import SelectRecipe from "./SelectRecipe/SelectRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectIngredient />} />
        <Route path="/ingredients" element={<SelectIngredient />} />
        <Route path="/recipes" element={<SelectRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
