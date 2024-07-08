import "../Styles/Features.css";
const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <img src="Images/delivery-hand-package-icon 1.png" alt="Free Delivery" />{" "}
        <h3>Free Delivery</h3> <p>Free delivery on all orders over $50</p>{" "}
      </div>
      <div className="feature-item">
        <img src="Images/hand-money-icon.png" alt="Money Back" /> <h3>Money Back</h3>{" "}
        <p>30-day money-back guarantee</p>{" "}
      </div>
      <div className="feature-item">
        
        <img src="Images/customer-service-icon 1.png" alt="24/7 Support" />{" "}
        <h3>24/7 Support</h3> <p>Customer support available 24/7</p>{" "}
      </div>
    </div>
  );
};
export default Features;
