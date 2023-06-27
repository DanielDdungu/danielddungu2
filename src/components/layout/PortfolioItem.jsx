import React from "react";

const PortfolioItem = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <div className="portfolio-item relative overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="portfolio-item-overlay absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 bg-gray-800 transition-opacity duration-300">
        <div className="text-white text-center">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
