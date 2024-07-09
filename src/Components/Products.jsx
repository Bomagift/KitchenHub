import ProductData from "../Pages/ProductData";
import "../Styles/Products.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [showFeatured, setShowFeatured] = useState(false);

  const newArrivals = ProductData.filter(
    (product) => product.category === "New Arrivals"
  );
  const featuredProducts = ProductData.filter(
    (product) => product.category === "Featured Products"
  );
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  const toggleFeatured = () => {
    setShowFeatured(!showFeatured);
  };

  return (
    <div className="products">
      <h2>New Arrivals</h2>
      <h6>
        Explore Our Latest Kitchen gadgets and <br /> transform your cooking
        Experience!
      </h6>
      <div className="product-list">
        {newArrivals.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="love-icon">
              <img src="Images/Group 198.png" alt="" />
            </div>
            <div className="add-to-cart">
              <span onClick={handleCart}>Add to Cart</span>
              <img
                src="Images/lets-icons_add-light.png"
                alt=""
                onClick={handleCart}
              />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <h2>Featured Products</h2>
      <h6>"Top Picks of the Month"</h6>
      <div className="arrow" onClick={toggleFeatured}>
        {showFeatured ? '▲' : '▼'}
      </div>
      {showFeatured && (
        <div className="product-list featured">
          {featuredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="love-icon">
                <img src="Images/Group 198.png" alt="" />
              </div>
              <div className="add-to-cart">
                <span onClick={handleCart}>Add to Cart</span>
                <img src="Images/lets-icons_add-light.png" alt="" onClick={handleCart} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
