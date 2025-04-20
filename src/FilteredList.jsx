import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

const FilteredList = ({ items }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const filtered = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = type === 'all' || item.type === type;
    return matchesSearch && matchesType;
  });

  return (
    <div className="mb-3">
      <h2>Produce Search</h2>
      <Dropdown onSelect={setType} className="mb-2">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {type}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="form-control mb-2"
      />
      <List items={filtered} />
    </div>
  );
};

export default FilteredList;
