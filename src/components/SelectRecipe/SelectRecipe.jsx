import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ShowRecipe from "../ShowRecipe/ShowRecipe";
import "./SelectRecipe.css";

function SelectRecipe() {
  const navigate = useNavigate();
  const location = useLocation();
  const exactMatches = location.state?.exactMatches || [];
  const closeMatches = location.state?.closeMatches || [];
  const selectedItems = location.state?.selectedItems || [];

  const [selectedTab, setSelectedTab] = useState("exact");
  const [previewTab, setPreviewTab] = useState(null);

  const displayedContent = previewTab || selectedTab;

  const navigateToKitchen = () => {
    navigate("/", {
      state: {
        selectedItems: selectedItems,
      },
    });
  };

  return (
    <div className="tabs-container" style={{ backgroundColor: "#ede0d4" }}>
      <div className="tabs">
        <button
          className={`button-tabs ${
            previewTab === "exact" || (!previewTab && selectedTab === "exact")
              ? "active"
              : ""
          }`}
          onClick={() => setSelectedTab("exact")}
          onMouseEnter={() => setPreviewTab("exact")}
          onMouseLeave={() => setPreviewTab(null)}
        >
          Exact Match
        </button>
        <button
          className={`button-tabs ${
            previewTab === "close" || (!previewTab && selectedTab === "close")
              ? "active"
              : ""
          }`}
          onClick={() => setSelectedTab("close")}
          onMouseEnter={() => setPreviewTab("close")}
          onMouseLeave={() => setPreviewTab(null)}
        >
          Close Match
        </button>
        <span
          className="material-symbols-outlined"
          onClick={navigateToKitchen}
          style={{ cursor: "pointer" }}
        >
          kitchen
        </span>
      </div>
      <div className="content">
        <ShowRecipe
          recipes={displayedContent === "exact" ? exactMatches : closeMatches}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
}

export default SelectRecipe;
