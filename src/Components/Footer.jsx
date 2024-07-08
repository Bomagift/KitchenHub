import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h3>KITCHENHUB</h3>
          <p>© Copyright 2024</p>
          <div className="payment-methods">
            <img
              src="Images/206684_visa_method_card_payment_icon.png"
              alt="Visa"
            />
            <img
              src="Images/742719_card_money_payment_payu_icon (1).png"
              alt="PayU"
            />
            <img
              src="Images/206682_american_express_method_card_payment_icon.png"
              alt="American"
            />
          </div>
        </div>
        <div className="footer-section company">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms And Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-section useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/signin">Sign in</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Connect with us</h4>
          <ul>
            <li>
              <a href="/Address">123NY Orchard, New York City</a>
            </li>
            <li>
              <a href="/Numberr">555-555-5555</a>
            </li>
            <li>
              <a href="/info">info@kitchenhub.us</a>
            </li>
          </ul>

          <div className="social-icons">
            <a href="https://www.facebook.com">
              <img src="Images/facebook-round-color-icon.png" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com">
              <img src="Images/telegram-icon.png" alt="Telegram" />
            </a>

            <a href="https://www.twitter.com">
              <img src="Images/Group 221.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
