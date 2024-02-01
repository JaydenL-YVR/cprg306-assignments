import React from 'react';
import ItemList from './item-list';

export default function Page()
{
  return (
    <main className="mt-4">
      <h1 className="text-3xl font-bold max-w-md mx-auto">Shopping List</h1>
      <ItemList />
    </main>
  );
};
