import React, { useState } from 'react';
import './App.css';

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shipping, setShipping] = useState('None');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price: parseFloat(price), shipping });
    setName('');
    setPrice('');
    setShipping('None');
  };

  return (
    <div className="add-item-container">
      <header className="add-item-header">
        <h1>Add Item</h1>
        <button className="add-button">Add</button>
      </header>
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
    </div>
  );
};

;
