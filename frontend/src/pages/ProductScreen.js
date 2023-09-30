import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import useSingleProduct from "../hooks/useSingleProduct";
import Slider from "../components/Slider";
import Search from "../components/Search";
import BackButton from "../components/BackButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/authReducer";

const ProductScreen = () => {
  const { id } = useParams();
  const { data: item, loading, error } = useSingleProduct(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {/* <Search /> */}
      <BackButton to="/" title={"Back to Home"} />

      <p className="product__description">{item.description}</p>

      <div className="product__container1">
        <div className="product__cover__container">
          <img src={item.cover} />
        </div>

        <Slider images={item.images} />

        <div className="product__cover__description">
          <h2>{item.name}</h2>
          <div className="product__cover__rating">
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <AiFillStar size={25} />
            <span>(50 customer reviews)</span>
          </div>

          <h4>Price - ₹ {item.price}</h4>
          <p>
            {item.color} | {item.headphoneType}
          </p>

          <p className="product__cover__longdescription">
            <p>About this item</p>
            {item.longDescription}
          </p>

          <div className="product__cover__brand">
            <strong>Available - </strong>
            <span>In Stock</span>
            <br />
            <strong>Brand - </strong>
            <span>{item.brand}</span>
          </div>
        </div>
      </div>

      <div className="product__container2">
        <div className="product__container2__left">
          {item?.images?.map((img, idx) => (
            <div key={idx} className="product__container2__image__container">
              <img src={process.env.PUBLIC_URL + img} />
            </div>
          ))}
        </div>

        <div className="product__container2__right">
          <div
            className="product__container2__addtocart"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </div>
          <div
            className="product__container2__buynow"
            onClick={() => {
              dispatch(addToCart(item));
              navigate("/cart");
            }}
          >
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
