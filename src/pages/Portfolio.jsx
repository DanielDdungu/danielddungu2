import React, { useState } from "react";
import PortfolioItem from "../components/layout/PortfolioItem.jsx";
import PortfolioTabs from "../components/layout/PortfolioTabs.jsx";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const portfolioItems = [
    {
      title: "Project 1",
      description: "This is the description of Project 1",
      imageUrl: "https://example.com/project1.jpg",
      category: "Web Design",
    },
    {
      title: "Project 2",
      description: "This is the description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      category: "Mobile App",
    },
    {
      title: "Project 3",
      description: "This is the description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      category: "Mobile App",
    },
    {
      title: "Project 2",
      description: "This is the description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      category: "Mobile App",
    },
    {
      title: "Project 2",
      description: "This is the description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      category: "Mobile App",
    },
    {
      title: "Project 2",
      description: "This is the description of Project 2",
      imageUrl: "https://example.com/project2.jpg",
      category: "Mobile App",
    }
    
    // Add more portfolio items as needed
  ];

  // Filter portfolio items based on active category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Get unique categories
  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  return (
    <div className="portfolio-page w-full bg-black rounded-box py-3 px-12">
      <h2 className="text-2xl font-bold mb-4 ">Portfolio</h2>
      <PortfolioTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
