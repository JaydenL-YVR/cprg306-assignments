export default function Item({ name, quantity, category, onSelect }) {
    return (
      <ul
        className="border p-1 border-teal-900 mb-4 bg-teal-900 text-white hover:bg-blue-900 cursor-pointer"

        onClick={onSelect}
      >
        <li className='font-bold text-xl'>{name}</li>
        <li className='text-sm'>
          Buy {quantity} in {category}
        </li>
      </ul>
    );
  }