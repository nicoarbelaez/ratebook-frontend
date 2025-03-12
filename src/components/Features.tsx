import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Smart Recommendations',
    description: 'AI-powered content suggestions based on your preferences',
    icon: '🤖',
  },
  {
    id: 2,
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications and updates',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Community Driven',
    description: 'Join discussions and share your thoughts with others',
    icon: '👥',
  },
  {
    id: 4,
    title: 'Cross-Platform',
    description: 'Access your content from any device, anywhere',
    icon: '🌐',
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <span className="text-4xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}