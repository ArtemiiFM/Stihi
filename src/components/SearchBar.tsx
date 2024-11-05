import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl font-semibold">Поиск точных форм</h2>
        <button className="rounded-full w-6 h-6 bg-gray-200 flex items-center justify-center">?</button>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Слово или фраза"
          className="flex-1 p-2 border rounded"
        />
        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Искать
        </button>
      </div>
    </div>
  );
}
