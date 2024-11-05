import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { poems } from './data/poems';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    return poems.filter(poem => 
      poem.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SearchBar 
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      {searchTerm && (
        <SearchResults 
          results={searchResults}
          searchTerm={searchTerm}
        />
      )}
    </div>
  );
}

export default App;
