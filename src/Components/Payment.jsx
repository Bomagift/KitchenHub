import "../Styles/Payment.css";

function Payment() {
  return (
    <div className="payment-confirmed-container">
      {" "}
      <div className="breadcrumb">
        {" "}
        <span>&gt;</span> Payment Confirmed{" "}
      </div>{" "}
      <div className="payment-confirmed">
        {" "}
        <img
          src= "Images/Group (1).png"
          alt="Checkmark"
          className="checkmark-icon"
        />{" "}
        <h2>Payment Confirmed</h2>{" "}
        <p>
          {" "}
          Thank you, your payment has been confirmed and successful. A
          confirmation email has been sent to markbrenden@gmail.com.{" "}
        </p>{" "}
        <div className="order-summary">
          {" "}
          <h3>Order Summary</h3>{" "}
          <div className="summary-item">
            {" "}
            <p>Product 1: Juice mixer</p> <p>Quantity: 2</p>{" "}
            <p>Tickets will be sent to: markbrenden@gmail.com</p>{" "}
            <p>Price: $270.00</p>{" "}
          </div>{" "}
          <div className="summary-item">
            {" "}
            <p>Product 2: Pressure Cooker</p> <p>Quantity: 1</p>{" "}
            <p>Tickets will be sent to: markbrenden@gmail.com</p>{" "}
            <p>Price: $135.00</p>{" "}
          </div>{" "}
          <div className="total-price">
            {" "}
            <p>Total Price: $405.00</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="payment-info">
          {" "}
          <img src= "Images/206684_visa_method_card_payment_icon.png" alt="Visa" />{" "}
          <p>$405.00 was charged successfully</p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Payment;
