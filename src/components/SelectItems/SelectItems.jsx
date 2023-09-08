import React, { useState } from "react";
import ShowItems from "../ShowItems";
import "./SelectItems.css";

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
    <div className="main">
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
    </div>
  );
}

export default SelectItems;
