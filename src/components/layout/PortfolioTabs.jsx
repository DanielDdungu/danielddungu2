import React from "react";

const PortfolioTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="portfolio-tabs mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 mr-2 rounded ${
            activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PortfolioTabs;
