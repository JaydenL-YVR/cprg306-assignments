import React, { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = (() => {
    if (sortBy === "name") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      return items.sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  })();

  const handleClick = (sortType) => {
    setSortBy(sortType);

    if (sortType === "groupedCategory") {
      handleGroupedCategory();
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className='flex items-center px-2'>
        <p className='my-3 mr-2'>Sort by:</p>
        <button className={`${sortBy === "name" ? "bg-blue-900" : "bg-teal-900"} p-1 m-2 w-28`} onClick={() => handleClick("name")}>Name</button>
        <button className={`${ sortBy === "category" ? "bg-blue-900" : "bg-teal-900"} p-1 m-2 w-28`} onClick={() => handleClick("category")}>Category</button>
      </div>

      <div className="w-full max-w-md">
        {sortedItems.length === 0 && <p className="text-center">No items found.</p>}
        {sortedItems.map((item) => (
          <div key={item.id} className="mb-4 border p-1 border-teal-900 bg-teal-900 text-white">
            <p className="text-lg font-bold">{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
