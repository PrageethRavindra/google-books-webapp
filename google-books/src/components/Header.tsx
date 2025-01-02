import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white p-6 mb-6 shadow-xl rounded-b-2xl">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-md mb-4 sm:mb-0">
          Google Books Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border-2 border-white rounded-md text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none w-full sm:w-64"
          />
          <button
            type="submit"
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-purple-50 transition duration-300 w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
