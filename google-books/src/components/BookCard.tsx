import React from 'react';

// Books Types
interface VolumeInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail?: string;
  };
}

export interface Book {
  volumeInfo: VolumeInfo;
}

interface BookCardProps {
  book: Book;
}

const BooksCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 duration-300">
      <img
        src={imageLinks?.thumbnail || '/no-image.png'}
        alt={title || 'No title available'}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">
          {title || 'No Title Available'}
        </h3>
        <p className="text-sm text-gray-200">
          {authors && authors.length > 0 ? authors.join(', ') : 'Unknown Author'}
        </p>
      </div>
    </div>
  );
};

export default BooksCard;
