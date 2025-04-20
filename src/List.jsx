import React from 'react';

const List = ({ items }) => (
  <ul className="list-group">
    {items.map(item => (
      <li key={item.name} className="list-group-item">
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
