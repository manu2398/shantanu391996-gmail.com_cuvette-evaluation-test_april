import React, { useState } from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import GridFilter from "../components/GridFilter";
import FilterButton from "../components/FilterButton";
import CardGrid from "../components/CardGrid";

const headphoneTypeData = [
  { idx: 1, label: "In-ear headphone", value: "In-ear headphone" },
  { idx: 2, label: "On-ear headphone", value: "On-ear headphone" },
  { idx: 3, label: "Over-ear headphone", value: "Over-ear headphone" },
];

const companyData = [
  { idx: 1, label: "JBL", value: "JBL" },
  { idx: 2, label: "Sony", value: "Sony" },
  { idx: 3, label: "Boat", value: "Boat" },
  { idx: 4, label: "Zebronics", value: "Zebronics" },
  { idx: 5, label: "Marshall", value: "Marshall" },
  { idx: 6, label: "Ptron", value: "Ptron" },
];

const colorData = [
  { idx: 1, label: "Blue", value: "Blue" },
  { idx: 2, label: "Black", value: "Black" },
  { idx: 3, label: "White", value: "White" },
  { idx: 4, label: "Brown", value: "Brown" },
];

const priceData = [
  { idx: 1, label: "₹0 - ₹1,000", value: "0,1000" },
  {
    idx: 2,
    label: "₹1,000 - ₹10,000",
    value: "1000,10000",
  },

  {
    idx: 3,
    label: "₹10,000 - ₹20,000",
    value: "10000,20000",
  },
];

const sortByData = [
  { idx: 0, label: "Featured", value: "Featured" },
  { idx: 1, label: "Price : Lowest", value: "price" },
  { idx: 2, label: "Price : Highest", value: "-price" },
  { idx: 3, label: "Name : (A-Z)", value: "-name" },
  { idx: 4, label: "Name : (Z-A)", value: "name" },
];

const Home = () => {
  const [view, setView] = useState("listview");
  const [productQuery, setProductQuery] = useState({});

  return (
    <>
      <Hero />
      <Search
        onSearch={(searchTerm) =>
          setProductQuery({ ...productQuery, keyword: searchTerm })
        }
      />
      <div className="filter__container">
        <GridFilter view={view} setView={setView} />
        <div className="filterbutton__container">
          <FilterButton
            name="Headphone Type"
            item={headphoneTypeData}
            onSelectItem={(query) =>
              setProductQuery({ ...productQuery, headphoneType: query })
            }
            selectedItem={productQuery.headphoneType}
          />
          <FilterButton
            name="Company"
            item={companyData}
            onSelectItem={(query) =>
              setProductQuery({ ...productQuery, brand: query })
            }
            selectedItem={productQuery.brand}
          />
          <FilterButton
            name="Color"
            item={colorData}
            onSelectItem={(query) =>
              setProductQuery({ ...productQuery, color: query })
            }
            selectedItem={productQuery.color}
          />
          <FilterButton
            name="Price"
            item={priceData}
            onSelectItem={(query) =>
              setProductQuery({
                ...productQuery,
                "price[gte]": query ? query.split(",")[0] : null,
                "price[lte]": query ? query.split(",")[1] : null,
              })
            }
            selectedItem={productQuery.price}
          />

          <FilterButton
            name="Sort By"
            item={sortByData}
            onSelectItem={(query) =>
              setProductQuery({
                ...productQuery,
                sort: query === "Featured" ? null : query,
                featured: query === "Featured" ? true : null,
              })
            }
            selectedItem={productQuery.sortBy}
          />
        </div>
      </div>

      <CardGrid view={view} item={productQuery} />
    </>
  );
};

export default Home;
