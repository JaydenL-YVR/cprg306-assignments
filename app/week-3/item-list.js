import React from 'react';
import Item from './item';

export default function ItemList() {
  let item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
   
  let item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
   
  let item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
   
  let item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
   
  let item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
   
  let item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
   
  let item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
   
  let item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
   
  let item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
   
  let item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
   
  let item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
   
  let item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ul>
        <Item
          name={item1.name}
          quantity={item1.quantity}
          category={item1.category}
        />
        <Item
          name={item2.name}
          quantity={item2.quantity}
          category={item2.category}
        />
        <Item
          name={item3.name}
          quantity={item3.quantity}
          category={item3.category}
        />
        <Item
          name={item4.name}
          quantity={item4.quantity}
          category={item4.category}
        />
        <Item
          name={item5.name}
          quantity={item5.quantity}
          category={item5.category}
        />
        <Item
          name={item6.name}
          quantity={item6.quantity}
          category={item6.category}
        />
        <Item
          name={item7.name}
          quantity={item7.quantity}
          category={item7.category}
        />
        <Item
          name={item8.name}
          quantity={item8.quantity}
          category={item8.category}
        />
        <Item
          name={item9.name}
          quantity={item9.quantity}
          category={item9.category}
        />
        <Item
          name={item10.name}
          quantity={item10.quantity}
          category={item10.category}
        />
        <Item
          name={item11.name}
          quantity={item11.quantity}
          category={item11.category}
        />
        <Item
          name={item12.name}
          quantity={item12.quantity}
          category={item12.category}
        />
      </ul>
    </div>
  );
}
