import React from 'react';
import ItemList from './item-list';

export default function Page()
{
  return (
    <main className="mt-4">
      <h1 className="text-3xl font-bold text-center mt-2 mb-4 ml-0">Shopping List</h1>
      <ItemList />
    </main>
  );
};
