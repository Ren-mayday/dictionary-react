import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="dictionary">
      <p className="dictionary-subtitle">Search for a word</p>

      <div className="search-bar">
        <input type="text" placeholder="Search a word..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}
