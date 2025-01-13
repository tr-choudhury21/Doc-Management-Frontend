import React, { useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      alert("Error searching documents.");
    }
  };

  return (

    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Search Documents</h2>

        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
            <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by document name or keyword..."
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
            <button
                onClick={handleSearch}
                className="absolute right-2 top-[5px] px-4 py-2 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            >
                Search
            </button>
            </div>

            {results.length > 0 ? (
            <ul className="mt-6 space-y-3">
                {results.map((result, index) => (
                <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    <span className="text-gray-800">{result}</span>
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                    View
                    </button>
                </li>
                ))}
            </ul>
            ) : (
            <p className="mt-6 text-gray-500 text-center">No results found. Try a different query.</p>
            )}
        </div>
    </div>

  );
};

export default SearchPage;
