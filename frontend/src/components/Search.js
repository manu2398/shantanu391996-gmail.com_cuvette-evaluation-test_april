import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      onSearch(search);
      setSearch("");
    } else {
      onSearch(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search__form">
      <div className="search__container">
        <input
          type="text"
          placeholder="Search Product"
          className="search__container__input"
          onChange={handleChange}
          value={search}
        />
        <HiOutlineSearch className="search__container__icon" />
      </div>
    </form>
  );
};

export default Search;
