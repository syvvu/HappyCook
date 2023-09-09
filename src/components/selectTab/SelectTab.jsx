import React, { useState } from "react";
import "./selectTab.css";

function SelectTab() {
  const [selectedTab, setSelectedTab] = useState("exact");
  const [previewTab, setPreviewTab] = useState(null);

  function ExactMacth() {
    return <p>This is exact match.</p>;
  }

  function CloseMacth() {
    return <p>This is close match.</p>;
  }

  const displayedContent = previewTab || selectedTab;

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={
            previewTab === "exact" || (!previewTab && selectedTab === "exact")
              ? "active"
              : ""
          }
          onClick={() => setSelectedTab("exact")}
          onMouseEnter={() => setPreviewTab("exact")}
          onMouseLeave={() => setPreviewTab(null)}
        >
          Exact Match
        </button>
        <button
          className={
            previewTab === "close" || (!previewTab && selectedTab === "close")
              ? "active"
              : ""
          }
          onClick={() => setSelectedTab("close")}
          onMouseEnter={() => setPreviewTab("close")}
          onMouseLeave={() => setPreviewTab(null)}
        >
          Close Match
        </button>
      </div>
      <div className="content">
        {displayedContent === "exact" ? ExactMacth() : CloseMacth()}
      </div>
    </div>
  );
}

export default SelectTab;
