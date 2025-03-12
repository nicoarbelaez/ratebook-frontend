import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { mockItems } from '../data/mockItems';

export default function ItemGrid() {
  const [items] = useState(mockItems);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <a href={`/items/${item.id}`} class="block">
            <div className="relative">
              <img
                src={item.coverImage}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>
                    {index < Math.floor(Number(item.rating)) ? '★' : '☆'}
                  </span>
                ))}
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  ({item.rating})
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{item.commentsCount} comments</span>
                <span className="mx-2">•</span>
                <span>{item.reviewsCount} reviews</span>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
      <div ref={ref} />
    </motion.div>
  );
}