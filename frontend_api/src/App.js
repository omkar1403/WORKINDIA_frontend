// src/App.js
import {React,useState} from 'react';
import Explore from './Explore';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div className="App">
      <Explore />
      <addItem onAdd={addItem} />
    </div>
  );
}

export default App;
