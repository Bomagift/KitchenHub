import { useNavigate } from "react-router-dom";
import "../Styles/Cart.css";

const Cart = () => {
  const items = [
    {
      id: 1,
      image: "Images/pngwing.com (25) 1.png",
      name: "Juice Mixer",
      buyer: "Mary Brenden",
      brand: "Sencor",
      price: 135,
      quantity: 1,
    },
    {
      id: 2,
      image: "Images/pngwing.com (20).png",
      name: "Pressure Cooker",
      buyer: "Sharon Doe",
      brand: "Tristar",
      price: 135,
      quantity: 1,
    },
  ];
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-summary">
        <div className="breadcrumb1">
          <span>&gt;</span> CART SUMMARY
        </div>

        <div className="cart-totals">
          <p>Total:</p>
          <p>$270.00</p>
        </div>
        <p className="delivery">delivery</p>

        <div className="cart-items">
          {items.map((item) => (
            <>
              <div className="carts">
                <div className="cart-item" key={item.id}>
                  <img className="iTem" src={item.image} alt={item.name} />
                  <div className="item-actions">
                    <div className="Button-delete">
                      <button className="quantity-btn">-</button>
                      <span>{item.quantity}</span>
                      <button className="quantity-btn">+</button>
                    </div>
                    <div className="image-delete">
                      <img
                        className="imaGe"
                        src="Images/fluent_delete-48-regular.png"
                        alt=""
                      />
                      <p>delete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-details">
                <h3>Name of Product: {item.name}</h3>
                <p>Buyer's Name: {item.buyer}</p>
                <p>Brand: {item.brand}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="cart-total">
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout{" "}
          <img src="Images/basil_arrow-right-outline.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default Cart;
