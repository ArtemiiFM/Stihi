import React from 'react';
import { Poem } from '../data/poems';

interface SearchResultsProps {
  results: Poem[];
  searchTerm: string;
}

export function SearchResults({ results, searchTerm }: SearchResultsProps) {
  const getTotalExamples = () => {
    return results.reduce((total, poem) => {
      const matches = (poem.text.match(new RegExp(searchTerm, 'gi')) || []).length;
      return total + matches;
    }, 0);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <h3>Запрос</h3>
          <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm">
            Вернуться к поиску
          </button>
        </div>
        <div className="text-gray-600">
          {results.length} текст • {getTotalExamples()} примеров
        </div>
      </div>
      
      <div className="space-y-6">
        {results.map((poem, index) => (
          <div key={poem.id} className="border-b pb-4">
            <h3 className="font-semibold mb-2">
              {index + 1}. {poem.author}. «{poem.title}» ({poem.year})
            </h3>
            <p className="whitespace-pre-line">
              {poem.text.split(new RegExp(`(${searchTerm})`, 'gi')).map((part, i) => 
                part.toLowerCase() === searchTerm.toLowerCase() ? 
                  <span key={i} className="text-red-500">{part}</span> : 
                  part
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
