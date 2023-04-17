import { useEffect, useState, useContext } from "react";
import { LOGOURL } from "../utils/constants";
import Logo from "../assets/img/food.png";
import { Link } from "react-router-dom";
import Instamart from "../components/Instamart";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Header = () => {
  const [LoggedInUser, setLoggedInUser] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("Use effect");
  }, []);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  

  return (
    <div className=" flex space-y-7 justify-between bg-black font-serif text-white shadow-lg px-5 sticky top-0 ">
      <div className="logocontainer">
        <a href="/">
          <img className="h-28 p-3" src={Logo}></img>
        </a>
      </div>

      <div className="nav-items">
        <ul className="flex py-3">
          <li className="px-5">
            <Link to="/">
              <button className="text-white hover:underline">Home</button>
            </Link>
          </li>
          <li className="px-5">
            <Link to="/about">
              <button className="text-white hover:underline">About Us</button>
            </Link>
          </li>
          <li className=" px-5">
            <Link to="/contact">
              <button className="text-white hover:underline">Contact Us</button>
            </Link>
          </li>
          <li className="px-5">
            <Link to="/instamart">
              <button className="text-white hover:underline">Instamart</button>
            </Link>
          </li>
          <Link to="/cart">
            <li className=" text-white px-5 hover:underline">
              Cart - {cartItems.length}
            </li>
          </Link>
         
        </ul>
      </div>

      <div className="flex px-5 py-3 pr-8">
        <div className="px-5">{user.name}</div>

        <div>
          {LoggedInUser ? (
            <button
              className="hover:underline"
              onClick={() => {
                setLoggedInUser(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              className="hover:underline"
              onClick={() => {
                setLoggedInUser(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
