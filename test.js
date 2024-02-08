"use client";

import React, { useState } from 'react';
import itemsData from './items.json';
import Item from './item';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  let items = itemsData.map((item) => ({ ...item }));

  const sortItems = () => {
    if (sortBy === 'name') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      items.sort((a, b) => a.category.localeCompare(b.category));
    }
  };

  sortItems();

  const handleSortByName = () => {
    setSortBy('name');
    sortItems();
  };

  const handleSortByCategory = () => {
    setSortBy('category');
    sortItems();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-2 mb-4 ml-0">
        <label htmlFor="sortBy">Sort by:</label>
        <button
          onClick={handleSortByName}
          className={`ml-2 mr-4 p-2 ${sortBy === 'name' ? 'bg-teal-900 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`p-2 ${sortBy === 'category' ? 'bg-teal-900 text-white' : 'bg-gray-300 text-gray-800'}`}
        >
          Category
        </button>
      </div>
      <div className="grid grid-cols-1 w-full max-w-md">
        {items.length === 0 && <p className="text-center">No items found.</p>}
        {items.map((item) => (
          <div key={item.id} className="mb-4 border p-1 border-teal-900 bg-teal-900 text-white">
            <p className="text-lg font-bold">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
