import React, { useEffect, useState } from 'react';
import BooksCard, { Book } from '../components/BookCard';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async (query: string = 'Harry Potter') => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (query: string) => {
    fetchBooks(query);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 min-h-screen">
        <Header onSearch={handleSearch} />
        <main className="container mx-auto py-10 px-6">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="text-white text-lg font-medium animate-pulse">
                Loading books...
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-red-400 font-semibold text-lg">
              {error}
            </div>
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {books.map((book, index) => (
                <BooksCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-300 font-medium mt-12">
              No books found. Try a different search query.
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
