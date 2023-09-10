import React, { useState } from "react";
import ExactMatch from "../recipeTabs/ExactMatch";
import CloseMatch from "../recipeTabs/CloseMatch";
import "./selectTab.css";

function SelectTab() {
  const [selectedTab, setSelectedTab] = useState("exact");
  const [previewTab, setPreviewTab] = useState(null);

  const displayedContent = previewTab || selectedTab;

  return (
    <div className="tabs-container" style={{ backgroundColor: "#b08968" }}>
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
      </div>
      <div className="content">
        {displayedContent === "exact" ? <ExactMatch /> : <CloseMatch />}
      </div>
    </div>
  );
}

export default SelectTab;
