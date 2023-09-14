import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowItems from "../showItems/ShowItems";
import SubmitButton from "../submitButton/SubmitButton";
import "./selectItems.css";

function SelectItems() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((currentItem) => currentItem !== item);
      } else {
        return [...prevItems, item];
      }
    });
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
      <Link to="/recipes">
        <SubmitButton />
      </Link>
    </div>
  );
}

export default SelectItems;
