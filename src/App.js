import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Item from "./components/Item";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [sortBy, setSortBy] = useState(0);
  const handleSubmit = (newItem) => {
    newItem["id"] = Date.now();
    newItem["packed"] = false;
    setAllItems((prev) => [...prev, newItem]);
  };

  const handleChange = ({ target }) => {
    const { id, dataset } = target;
    const itemId = parseInt(id);
    setAllItems((prev) =>
      dataset.mode === "mark"
        ? prev.map((item) => {
            if (item.id === itemId) {
              return { ...item, packed: !item.packed };
            } else {
              return item;
            }
          })
        : prev.filter((item) => item.id !== itemId)
    );
    console.log(allItems);
  };

  const filteredItem = sortBy
    ? allItems.sort((a, b) => {
        if (sortBy === 1) {
          return a.name[0].charCodeAt() - b.name[0].charCodeAt();
        } else if (sortBy === 2) {
          return a.packed - b.packed;
        }
      })
    : allItems;
  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList
        handleSort={({ target }) => {
          setSortBy(parseInt(target.value));
        }}
        handleClear={() => {
          const isClear = window.confirm("Are you sure to clear the list?");
          if (isClear) {
            setSortBy(0);
          }
        }}
      >
        {filteredItem.map((item) => (
          <Item key={item.id} item={item} onChange={handleChange} />
        ))}
      </PackingList>
    </div>
  );
}

export default App;
