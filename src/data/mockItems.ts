export const mockItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  category: ['Movies', 'Series', 'Books'][i % 3],
  rating: (Math.random() * 5).toFixed(1),
  commentsCount: Math.floor(Math.random() * 100),
  reviewsCount: Math.floor(Math.random() * 50),
  coverImage: `https://picsum.photos/seed/${i + 1}/300/400`,
}));