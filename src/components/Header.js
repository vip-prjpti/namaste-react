import { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router"
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

export const Header = () => {

  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  // subscribing to store
  const cartItems = useSelector((store) => store.cart.items );
  // console.log(cartItems);



  return (
    <div className="flex justify-between items-center bg-blue-200 shadow-lg">
      <div className="logo-container">
        <img
          className="w-24"
          src={LOGO_URL}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status: {onlineStatus ? "Online ✅" : "Offline 🔴"}</li>
          <Link to='/' className="px-4"> Home</Link>
          <Link to='/about' className="px-4"> About</Link>
          <Link to='/' className="px-4"> Contact</Link>
          <Link to='/' className="px-4"> Cart - ({cartItems.length}) items</Link>
          <Link to='/' className="px-4 font-bold"> {loggedInUser}</Link>
          <button className="login" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;