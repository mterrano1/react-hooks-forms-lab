import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');
  // const [submittedData, setSubmittedData] = useState([]);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleItemName(e) {
    setItemName(e.target.value)
  }

  function handleItemCategory(e) {
    setItemCategory(e.target.value)
  }

  function onItemFormSubmit(newItem) {
    // const newItem = { name: itemName, category: itemCategory};
    // const dataArray = [...submittedData, newItem];
    // setSubmittedData(dataArray);
    const updatedItems = [...items, newItem]
    setItems(updatedItems)
    setItemName('');
    setItemCategory('Produce');
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filterBySearch = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} handleItemName={handleItemName} handleItemCategory={handleItemCategory} itemCategory={itemCategory} itemName={itemName} />
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filterBySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
