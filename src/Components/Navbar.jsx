import "../Styles/Navbar.css";
import { useState } from "react";

function Navbar() {
    const [categoriesVisible, setCategoriesVisible] = useState(false);
    const [shopVisible, setShopVisible] = useState(false);

    return (
        <nav className="header-bottom">
            <ul>
                <div className="menu-item" onClick={() => setCategoriesVisible(!categoriesVisible)}>
                    <li>
                        <a href="/categories"  className="shop">Shop by Categories</a>
                        <img src="public/Images/Polygon 2.png" alt="" />
                    </li>
                    
                    {categoriesVisible && (
                        <div className="dropdown large-dropdown">
                            <div className="dropdown-section">
                                <h4>Cooking Essentials</h4>
                                <ul>
                                    <li>Pots and Pans</li>
                                    <li>Knives and Spoons</li>
                                    <li>Cooking Utensils</li>
                                    <li>Mixing Bowls</li>
                                </ul>
                            </div>
                            <div className="dropdown-section">
                                <h4>Baking Supplies</h4>
                                <ul>
                                    <li>Baking Mixers</li>
                                    <li>Cookie Cutters</li>
                                    <li>Baking Pans</li>
                                    <li>Rolling Pins</li>
                                </ul>
                            </div>
                            <div className="dropdown-section">
                                <h4>Small Appliances</h4>
                                <ul>
                                    <li>Blenders and Mixers</li>
                                    <li>Coffee Makers</li>
                                    <li>Toasters</li>
                                    <li>Pressure Cookers</li>
                                </ul>
                            </div>
                            <div className="dropdown-section">
                                <h4>Big Appliances</h4>
                                <ul>
                                    <li>Microwaves</li>
                                    <li>Steamer and Rice Cookers</li>
                                    <li>Juicers</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="nav-links">
                    <li>
                        <a href="/">Home</a>
                        <div className="line"></div>
                    </li>
                    <div className="menu-item" onClick={() => setShopVisible(!shopVisible)}>
                        <li>
                            <a href="/shop">Shop</a>
                            <img src="public/Images/Polygon 2.png" alt="" />
                            {shopVisible && (
                                <div className="dropdown small-dropdown">
                                    <ul>
                                        <li>New Arrivals</li>
                                        <li>Best Sellers</li>
                                        <li>All Products</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </div>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </div>
            </ul>
            <div className="auth-links">
                <a href="/signin">Sign in/Register</a>
            </div>
        </nav>
    );
}

export default Navbar;
