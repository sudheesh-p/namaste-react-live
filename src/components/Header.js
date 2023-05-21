import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assests/img/logo.jpg";
import store from "../utils/store";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img
      data-testid="logo"
      className="h-24 p-2"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="flex space-x-2 justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to='/'>Home</Link></li>
          <li className="px-2"><Link to='/about'>About</Link></li>
          <li className="px-2">Contact</li>
          <li className="px-2" ><Link to='/instamart' data-testid="cart" >Cart- {cartItems.length} items</Link></li>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "🟢" : "🔴"}</h1>
      <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
    </div>
  );
};

export default Header;
