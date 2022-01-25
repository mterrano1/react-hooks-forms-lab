import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleItemName(e) {
    setItemName(e.target.value)
  }

  function handleItemCategory(e) {
    setItemCategory(e.target.value)
  }

  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        const newItem = {
          id: uuid(),
          name: itemName,
          category: itemCategory
        };
        onItemFormSubmit(newItem);
        setItemName('');
        setItemCategory('Produce');
      }}

      className="NewItem">

      <label>
        Name:
        <input onChange={handleItemName} value={itemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemCategory} value={itemCategory} name="category" >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
