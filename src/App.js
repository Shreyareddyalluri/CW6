import React from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import './App.css';

const produce = [
  { name: 'Apple', type: 'fruit' },
  { name: 'Banana', type: 'fruit' },
  { name: 'Carrot', type: 'vegetable' }
];

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Counter />
      <FilteredList items={produce} />
    </div>
  );
}

export default App;
