import React from "react";
import useProducts from "../hooks/useProducts";
import Card from "./Card";
import Grid from "./Grid";

const CardGrid = ({ view, item }) => {
  const { data: products, error, loading } = useProducts(item);

  if (products.length === 0) return <h2>Not Found</h2>;
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className={view === "listview" ? "cards" : "grid"}>
        {products.map((p) =>
          view === "listview" ? (
            <Card key={p._id} item={p} />
          ) : (
            <Grid key={p._id} item={p} />
          )
        )}
      </div>
    </>
  );
};

export default CardGrid;
