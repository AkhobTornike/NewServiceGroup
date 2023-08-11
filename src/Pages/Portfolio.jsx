import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Data from "../Data.json";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imagePath, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="h-screen flex items-center justify-center bg-center bg-cover my-12">
      <div ref={ref} className="relative">
        <img src={imagePath} alt="A London skyscraper" className='w-[500px] h-[700px]'/>
      </div>
      <motion.h2 className="absolute left-1/2 transform -translate-x-2/4 text-white bg-black" style={{ y }}>{title}</motion.h2>
    </section>
  );
}

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-accent">
      {Data.portfolio.map((item, index) => (
        <div key={item.id} className={index !== 0 ? 'mt-[700px]' : ''}>
          <Image imagePath={ `../../public/Newservicegroup_images/${item.title}/${item.images[0].image_path}` } title={item.title} />
        </div>
      ))}
      <motion.div className="fixed left-0 right-0 h-5 bg-accent bottom-10" style={{ scaleX }} />
    </div>
  );
};

export default Portfolio;
