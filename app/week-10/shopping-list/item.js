export default function Item({
  name,
  quantity,
  category,
  onSelect,
  deleteItem,
}) {
  return (
    <div className='flex items-center justify-between'>
      <ul
        className='bg-teal-900 mx-4 my-2 p-2 max-w-sm w-full hover:bg-blue-900 cursor-pointer flex justify-between items-center'
        onClick={onSelect}
      >
        <div>
          <li className='font-bold text-xl'>{name}</li>
          <li className='text-sm'>
            Buy {quantity} in {category}
          </li>
        </div>
      </ul>

      <div
        className='rounded bg-red-700 flex items-center text-black px-3 hover:bg-slate-100 transition-all duration-75 cursor-pointer'
        onClick={deleteItem}
      >
        X
      </div>
    </div>
  );
}