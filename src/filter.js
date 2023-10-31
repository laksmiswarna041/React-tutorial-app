import React, { useState } from 'react';

function FilteredList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'Category A' },
    { id: 2, name: 'Item 2', category: 'Category B' },
    { id: 3, name: 'Item 3', category: 'Category A' },
    { id: 4, name: 'Item 4', category: 'Category B' },
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter(item => item.category.includes(filter));

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by category"
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
