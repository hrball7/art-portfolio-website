import React from 'react';

export interface NewsItemData {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
}

interface NewsItemProps {
  news: NewsItemData;
  reverse?: boolean; // If true, image on right, text on left
}

const NewsItem: React.FC<NewsItemProps> = ({ news, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Side */}
      <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="aspect-[4/3] rounded-lg shadow-lg overflow-hidden bg-gray-100">
          <img
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }}
          />
          <div className="hidden w-full h-full bg-gradient-to-br from-art-blue-200 to-art-blue-400 items-center justify-center text-white text-lg font-medium">
            {news.title}
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-2">
              {news.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>{news.date}</span>
              {news.location && (
                <>
                  <span>•</span>
                  <span>{news.location}</span>
                </>
              )}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {news.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

