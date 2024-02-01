import React from 'react';
export default function Item({ name, quantity, category })
{
  return (
    <li className="border p-1 border-teal-900 mb-4 bg-teal-900 text-white">
      <p className="text-lg font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};
