import useData from "./useData";

const useProducts = (item) =>
  useData("/api/products", { params: { ...item } }, [item]);

export default useProducts;
