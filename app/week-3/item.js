import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border p-1 border-teal-900 mb-4 bg-teal-900 text-white">
      <p className="text-lg font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;
