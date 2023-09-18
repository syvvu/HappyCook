import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowItems from "../showItems/ShowItems";
import SubmitButton from "../submitButton/SubmitButton";
import "./selectItems.css";

function SelectItems() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleItemSelect = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((currentItem) => currentItem !== item);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const fetchRecipes = async (selectedItems) => {
    const response = await fetch("http://localhost:5001/find-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedIngredients: selectedItems }),
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    return response.json();
  };

  const navigateToRecipes = (data, selectedItems) => {
    navigate("/recipes", {
      state: {
        exactMatches: data.exactMatches,
        closeMatches: data.closeMatches,
        selectedItems: selectedItems,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const data = await fetchRecipes(selectedItems);
      navigateToRecipes(data, selectedItems);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    }
  };

  return (
    <div className="main" style={{ backgroundColor: "#7f5539" }}>
      <h1>Hello, Chef!</h1>
      <div className="cards">
        <div className="card">
          <h2>Protein</h2>
          <ShowItems
            name="protein"
            selectedItems={selectedItems}
            onSelectItems={handleItemSelect}
          />
        </div>
        <div className="card">
          <h2>Vegetables</h2>
          <ShowItems
            name="vegetables"
            selectedItems={selectedItems}
            onSelectItems={handleItemSelect}
          />
        </div>
        <div className="card">
          <h2>Grains</h2>
          <ShowItems
            name="grains"
            selectedItems={selectedItems}
            onSelectItems={handleItemSelect}
          />
        </div>
        <div className="card">
          <h2>Dairy</h2>
          <ShowItems
            name="dairy"
            selectedItems={selectedItems}
            onSelectItems={handleItemSelect}
          />
        </div>
      </div>
      <Link to="/recipes" onClick={handleSubmit}>
        <SubmitButton />
      </Link>
    </div>
  );
}

export default SelectItems;
