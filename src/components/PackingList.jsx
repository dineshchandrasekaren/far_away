const PackingList = ({ children, handleSort, handleClear }) => {
  return (
    <div className="list">
      <ul>{children}</ul>
      <div className="action">
        <select onChange={handleSort}>
          <option value="O">SORT BY INPUT ORDER</option>
          <option value="1">SORT BY DESCRIPTION</option>
          <option value="2">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={handleClear}>CLEAR ALL</button>
      </div>
    </div>
  );
};

export default PackingList;
