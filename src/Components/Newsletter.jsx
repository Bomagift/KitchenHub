import "../Styles/Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe To Our Newsletter</h2>
      <p>Subscribe to our newsletter and save 10% off your next purchase</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};
export default Newsletter;
