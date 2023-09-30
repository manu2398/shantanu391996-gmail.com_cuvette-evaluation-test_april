import useData from "./useData";

const useSingleProduct = (id) => useData(`/api/products/${id}`);

export default useSingleProduct;
