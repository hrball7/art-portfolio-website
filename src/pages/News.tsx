import React from 'react';
import NewsItem, { NewsItemData } from '../components/NewsItem';

const News: React.FC = () => {
  const newsItems: NewsItemData[] = [
    {
      id: '1',
      title: 'Upcoming Exhibition: Identity & Self',
      date: 'November, 2025',
      location: 'Hanes Arts Center, Sample Gallery, Chapel Hill NC',
      description: 'Join me for my upcoming group exhibition featuring a collection of works done by the Student Art Major Alliance of UNC. The show includes my recent self portrait that explores themes of losing and finding identity. Opening reception will be held on Nov. 5th from 6-7 PM.',
      imageUrl: '/Images/oil/self portrait.JPG', 
      imageAlt: 'Spring Showcase Exhibition'
    },
    {
      id: '2',
      title: "Smith Farm Spring Fling: Women's Center Gallery",
      date: 'May 3, 2022',
      location: 'Smith Farm Community Center, Apex NC',
      description: "I was thrilled to be part of the Smith Farm Spring Fling community arts event. Through this event, I was able to showcase my butterfly and flower watercolor collection while raising money for the Women's Center in Raleigh.",
      imageUrl: '/Images/womenscenter.jpg', 
      imageAlt: 'Contemporary Voices Exhibition'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-art-blue-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">
              News & Exhibitions
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Stay updated on my latest exhibitions, shows, and artistic endeavors
            </p>
          </div>
        </div>
      </section>

      {/* News Items Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            {newsItems.length > 0 ? (
              newsItems.map((news, index) => (
                <NewsItem 
                  key={news.id} 
                  news={news} 
                  reverse={index % 2 === 1} 
                />
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  No News Yet
                </h3>
                <p className="text-gray-600">
                  Check back soon for updates on upcoming exhibitions and shows.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

