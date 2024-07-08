import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Checkout.css";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    navigate('/pay');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="payment-steps">
        <div className="step active">1. Cart</div>
        <div className="step active">2. Shipping</div>
        <div className="step active">3. Payment</div>
      </div>
      <div className="payment-methods">
        <h3>Choose your payment method</h3>
        <div className="methods">
          <label className="method">
            <input
              type="radio"
              name="payment"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={() => setPaymentMethod("visa")}
            />
            <img src="Images/206684_visa_method_card_payment_icon.png" alt="Visa" />
          </label>
          <label className="method">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            <img src="Images/pngwing.com (30) 1.png" alt="PayPal" />
          </label>
          <label className="method">
            <input
              type="radio"
              name="payment"
              value="amex"
              checked={paymentMethod === "amex"}
              onChange={() => setPaymentMethod("amex")}
            />
            <img src="Images/206682_american_express_method_card_payment_icon.png" alt="American Express" />
          </label>
          <label className="method">
            <input
              type="radio"
              name="payment"
              value="payu"
              checked={paymentMethod === "payu"}
              onChange={() => setPaymentMethod("payu")}
            />
            <img src="Images/742719_card_money_payment_payu_icon (1).png" alt="PayU" />
          </label>
        </div>
      </div>
      <form className="payment-form">
        <div className="form-group">
          <label>Card Name</label>
          <input type="text" placeholder="Card Name" required />
        </div>
        <div className="form-group">
          <label>Card Holder</label>
          <input type="text" placeholder="Card Holder" required />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" placeholder="MM/YY" required />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input type="text" placeholder="CVC" required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="save-details" />
          <label htmlFor="save-details">
            Save my details for future purchases
          </label>
        </div>
      </form>
      <div className="summary">
        <div className="total">
          <p>Subtotal (3 Units)</p>
          <p>$270.00</p>
        </div>
        <div className="total">
          <p>Delivery Fee</p>
          <p>$0.00</p>
        </div>
        <div className="total amount">
          <p>TOTAL AMOUNT</p>
          <p>$270.00</p>
        </div>
      </div>
      <button className="confirm-button" onClick={handleConfirmPayment}>Confirm Payment</button>
    </div>
  );
};

export default Checkout;
