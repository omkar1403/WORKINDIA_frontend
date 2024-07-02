import React, { useState } from 'react';
import './Explore.css';

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shipping, setShipping] = useState('None');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Math.random(), name, price: parseFloat(price), shipping });
    setName('');
    setPrice('');
    setShipping('None');
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-field"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        className="input-field"
        placeholder="Item Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select
        className="input-field"
        value={shipping}
        onChange={(e) => setShipping(e.target.value)}
      >
        <option value="Same Day Shipping">Same Day Shipping</option>
        <option value="None">None</option>
      </select>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

const Explore = () => {
  const initialItems = [
    { id: 1, name: 'Item 1', price: 100.0, shipping: 'Same Day Shipping' },
    { id: 2, name: 'Item', price: 110.0 },
    { id: 3, name: 'Item 3', price: 130.0 },
    { id: 4, name: 'Item 4', price: 230.0 },
    { id: 5, name: 'Item 5', price: 230.0 },
    { id: 6, name: 'Item 6', price: 230.0 },
    { id: 7, name: 'Item 7', price: 230.0 },
    { id: 8, name: 'Item 8', price: 230.0 },
  ];
  
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddItem, setShowAddItem] = useState(false);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="explore1">
      <header className="explore2">
        <h1>Explore</h1>
        <button className="filter-button" onClick={() => setShowAddItem(!showAddItem)}>
          {showAddItem ? 'Close' : 'Add'}
        </button>
      </header>
      <input
        type="text"
        className="search1"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {showAddItem && <AddItem onAdd={addItem} />}
      <ul className="items-list">
        {filteredItems.map(item => (
          <li key={item.id} className="item">
            <div className="item1">
              <h2>{item.name}</h2>
              <p>MRP: ₹{item.price.toFixed(1)}</p>
            </div>
            {item.shipping && (
              <span className="shipping1">{item.shipping}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
