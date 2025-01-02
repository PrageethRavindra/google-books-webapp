import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-bold tracking-wide mb-4 sm:mb-0">Google Books</h1>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 transition-colors px-4 py-2 rounded-full font-medium shadow-md mb-2 sm:mb-0">
              About
            </button>
            <button className="bg-purple-500 hover:bg-purple-700 transition-colors px-4 py-2 rounded-full font-medium shadow-md mb-2 sm:mb-0">
              Contact
            </button>
            <button className="bg-teal-500 hover:bg-teal-700 transition-colors px-4 py-2 rounded-full font-medium shadow-md">
              SignIn
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="bg-white shadow-xl rounded-lg p-6 border-t-4 border-blue-500">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-gray-300">
        <div className="container mx-auto px-6 py-5 text-center">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} <span className="font-bold">Google Books App</span>. All Rights Reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed with <span className="text-red-500">❤️</span> by <span className="font-bold">Prageeth Raveendra</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
