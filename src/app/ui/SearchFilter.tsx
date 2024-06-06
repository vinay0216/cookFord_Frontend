import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('jobs');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilterOption('jobs');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="search" className="block text-gray-700 text-sm font-bold mb-2">
          Search by Keyword
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Type here..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <span className="text-gray-700 text-sm font-bold mb-2">Type of Provider</span>
        <div className="flex items-center mb-4">
          <input
            id="agencies"
            type="radio"
            name="provider"
            value="agencies"
            checked={filterOption === 'agencies'}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="agencies" className="text-sm">
            Agencies/Companies
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="individuals"
            type="radio"
            name="provider"
            value="individuals"
            checked={filterOption === 'individuals'}
            onChange={handleFilterChange}
            className="mr-2"
          />
          <label htmlFor="individuals" className="text-sm">
            Individuals
          </label>
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default SearchFilter;
