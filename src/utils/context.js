import React, { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(''); // Initialize state here

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for easier access to context
export const useSearch = () => useContext(SearchContext);
