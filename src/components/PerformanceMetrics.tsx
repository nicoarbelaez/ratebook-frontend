import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { id: 1, label: 'Active Users', value: '10K+', icon: '👥' },
  { id: 2, label: 'Items Added', value: '50K+', icon: '📚' },
  { id: 3, label: 'Reviews', value: '100K+', icon: '⭐' },
  { id: 4, label: 'Response Time', value: '<100ms', icon: '⚡' },
];

export default function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {metrics.map((metric) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="text-4xl mb-4">{metric.icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</h3>
          <p className="text-gray-600 dark:text-gray-400">{metric.label}</p>
        </motion.div>
      ))}
    </div>
  );
}