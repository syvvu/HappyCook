import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ShowIngredient from "../ShowIngredient/ShowIngredient";
import Button from "../Button/Button";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./SelectIngredient.css";

const categories = [
  { name: "protein", label: "Protein" },
  { name: "vegetables", label: "Vegetables" },
  { name: "grains", label: "Grains" },
  { name: "dairy", label: "Dairy" },
];

function SelectIngredient() {
  const location = useLocation();
  const initialSelectedItems = location.state?.selectedItems || [];

  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [isLoading, setIsLoading] = useState(false);
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
      video.playbackRate = 1.5;
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setSelectedItems([]);
  };

  const getRecipes = async (selectedItems) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/find-recipes`, {
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
    setIsLoading(true);
    setTimeout(async () => {
      try {
          const data = await getRecipes(selectedItems);
          navigateToRecipes(data, selectedItems);
      } catch (error) {
          console.error("Failed to get recipes:", error);
      } finally {
          setIsLoading(false);
      }
  }, 4000);
};

  return (
    <div className="main" style={{ backgroundColor: "#7f5539" }}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <div className="header-container">
            <h1>Hello, Chef!</h1>
            <video
              ref={videoRef}
              onClick={handleVideoClick}
              onEnded={handleVideoEnd}
              className={`broom-video ${
                selectedItems.length > 0 ? "visible" : ""
              }`}
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
                <ShowIngredient
                  name={category.name}
                  selectedItems={selectedItems}
                  onSelectItems={handleItemSelect}
                />
              </div>
            ))}
          </div>
          <Button name="Dive into Deliciousness" onClick={handleSubmit} />
        </>
      )}
    </div>
  );
}

export default SelectIngredient;
