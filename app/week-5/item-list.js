"use client";

import React, { useState } from 'react';
import itemsData from './items.json';

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
        <label htmlFor="sortBy" className="mb-4 p-2 border-teal-900 bg-teal-900 text-white mr-4">Sort by:</label>
        <button onClick={handleSortByName} className={`mb-4 border-2 p-1 border-teal-900 bg-teal-900 text-white mr-4 focus:border-white focus:bg-white focus:text-teal-900`}>Name</button>
        <button onClick={handleSortByCategory} className={`mb-4 border-2 p-1 border-teal-900 bg-teal-900 text-white mr-4 focus:border-white focus:bg-white focus:text-teal-900`}>Category</button>
      </div>

      <div className="w-full max-w-md">
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
