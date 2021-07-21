import "./Navbar.css";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import Categories from "./Categories";
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="main_header">
        <div className="top_head">
          <div className="Dropdown">
            <select
              id="languages"
              name="languages"
              className="Language_dropdown"
            >
              <option value="en">EN</option>
              <option value="zh">CH</option>
              <option value="ru">RU</option>
              <option value="es">SP</option>
            </select>
            <select
              id="currencies"
              name="currencies"
              className="Dollar_dropdown"
            >
              <option value="dollar">$</option>
              <option value="Ruppees">Rs</option>
            </select>
          </div>
          <div className="Profile_section">
            <div className="My_profile">
              <PermIdentityIcon className="header__UserIcon" />
              <div className="user_style">My profile</div>
              <Link to="/cart" className="cart__link">
                <ShoppingBasketIcon className="header__BasketIcon" />
              </Link>
              <div className="user_style">{getCartCount()} items</div>
              <SearchIcon className="header__SearchIcon" />
            </div>
          </div>
        </div>
        <div className="ishop">iSHOP</div>

        <div className="Category">
          <Categories />
        </div>

        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
