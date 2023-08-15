import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import Data from '../Data.json';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imagePath, title, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex items-center justify-center bg-center bg-cover my-12">
      <div ref={ref} className="relative">
        <img src={imagePath} alt="A London skyscraper" className="w-[500px] h-[700px]" />
      </div>
      <motion.button
        className="absolute left-1/2 transform -translate-x-2/4 text-white bg-[#a4c639] px-4 py-2 rounded-lg shadow-md hover:bg-gray-800"
        style={{ y }}
        onClick={onClick}
      >
        {title}
      </motion.button>
    </section>
  );
}

const PortfolioItem = ({ title, client, images }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Client: {client}</p>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img key={image.imageId} src={`../../public/Newservicegroup_images/${title}/${image.image_path}`} alt={image.image_name} />
        ))}
      </div>
    </div>
  );
};

const Portfolios = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <div className="min-h-screen bg-background text-accent">
      {Data.portfolio.map((item, index) => (
        <div key={item.id} className={index !== 0 ? 'mt-[700px]' : ''}>
          <Link to={`/portfolio/${item.id}`}>
            <Image imagePath={`../../public/Newservicegroup_images/${item.title}/${item.images[0].image_path}`} title={item.title} onClick={() => setSelectedItem(item)} />
          </Link>
        </div>
      ))}
      <motion.div className="fixed left-0 right-0 h-5 bg-accent bottom-10" style={{ scaleX }} />

      {/* Render the selected portfolio item */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <PortfolioItem title={selectedItem.title} client={selectedItem.client} images={selectedItem.images} />
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolios;
