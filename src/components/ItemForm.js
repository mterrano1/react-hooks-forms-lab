import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, itemCategory, itemName, handleItemName, handleItemCategory, handleSubmit }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      const name = e.target.children[0].children[0].value;
      const category = e.target.children[1].children[0].value;
      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: name,
        category: category
      };
      onItemFormSubmit(newItem)
      }} className="NewItem">
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
