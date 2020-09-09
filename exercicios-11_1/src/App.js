import React, { useLayoutEffect } from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const arrayList = ['limpar', 'fazer compras', 'ir no medico'];

function App() {
  return (
    <ul>
      {arrayList.map(item => task(item))}
    </ul>
  );
}

export default App;
