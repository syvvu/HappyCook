import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ShowItems from "../showItems/ShowItems";
import "./selectItems.css";

const categories = [
  { name: "protein", label: "Protein" },
  { name: "vegetables", label: "Vegetables" },
  { name: "grains", label: "Grains" },
  { name: "dairy", label: "Dairy" },
];

function SelectItems() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleItemSelect = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems.includes(item)) {
        return prevItems.filter((currentItem) => currentItem !== item);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!isPlaying) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setSelectedItems([]);
  };

  const getRecipes = async (selectedItems) => {
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
      const data = await getRecipes(selectedItems);
      navigateToRecipes(data, selectedItems);
    } catch (error) {
      console.error("Failed to get recipes:", error);
    }
  };

  return (
    <div className="main" style={{ backgroundColor: "#7f5539" }}>
      <div className="header-container">
        <h1>Hello, Chef!</h1>
        <video
          ref={videoRef}
          onClick={handleVideoClick}
          onEnded={handleVideoEnd}
          className="broom-video"
          muted
          playsInline
        >
          <source src="/assets/broom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="cards">
        {categories.map((category) => (
          <div className="card" key={category.name}>
            <h2>{category.label}</h2>
            <ShowItems
              name={category.name}
              selectedItems={selectedItems}
              onSelectItems={handleItemSelect}
            />
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Dive into Deliciousness
      </button>
    </div>
  );
}

export default SelectItems;
