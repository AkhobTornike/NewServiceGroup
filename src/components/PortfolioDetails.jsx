import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from '../Data.json';

const PortfolioDetails = () => {
  const { id } = useParams();
  const selectedItem = Data.portfolio.find(item => item.id === parseInt(id));

  if (!selectedItem) {
    return <div className="text-center mt-8 text-xl font-bold">Portfolio item not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-2">{selectedItem.title}</h2>
        <p className="text-gray-600 mb-4">Client: {selectedItem.client}</p>
        <p className="text-gray-600 mb-4">Year: {selectedItem.year}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedItem.images.map(image => (
          <img
              key={image.imageId}
              src={`../../public/Newservicegroup_images/${selectedItem.title}/${image.image_path}`}
              alt={image.image_name}
              className="w-full h-auto rounded-lg shadow"
          />
        ))}
        </div>
        <Link to="/portfolios" className="mt-8 block text-center text-gray-600 hover:text-gray-800">
          Back to Portfolios
        </Link>
      </div>
    </div>
  );
};

export default PortfolioDetails;
