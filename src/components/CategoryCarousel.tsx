import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const categories = [
  { id: 1, name: 'Movies', icon: '🎬', color: 'bg-blue-500' },
  { id: 2, name: 'Series', icon: '📺', color: 'bg-purple-500' },
  { id: 3, name: 'Books', icon: '📚', color: 'bg-green-500' },
];

export default function CategoryCarousel() {
  return (
    <div className="w-full max-w-md mx-auto h-[400px]">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-full"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className={`${category.color} rounded-2xl p-8 text-white`}>
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-6xl mb-4">{category.icon}</span>
              <h3 className="text-2xl font-bold">{category.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}