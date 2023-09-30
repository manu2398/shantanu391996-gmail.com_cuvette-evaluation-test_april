const FilterButton = ({ name, item, onSelectItem, selectedItem }) => {
  const handleChange = (e) => {
    e.target.value == "" ? onSelectItem(null) : onSelectItem(e.target.value);
  };

  return (
    <div className="filterbutton">
      <select name={name} onChange={(e) => handleChange(e)}>
        <option label={name}></option>
        {item.map((i) => (
          <option key={i.idx} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterButton;
