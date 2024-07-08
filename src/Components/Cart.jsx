import { useNavigate } from 'react-router-dom';
import "../Styles/Cart.css";

const Cart = () => {
  const items = [
    {
      id: 1,
      image:"Images/pngwing.com (25) 1.png" ,
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
    navigate('/checkout'); 
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>Name of Product: {item.name}</h3>
              <p>Buyer's Name: {item.buyer}</p>
              <p>Brand: {item.brand}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <div className="item-actions">
                <button className="quantity-btn">-</button>
                <span>{item.quantity}</span>
                <button className="quantity-btn">+</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
