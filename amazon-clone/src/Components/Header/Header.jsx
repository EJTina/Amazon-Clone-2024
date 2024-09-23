import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BiCartAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";


const Header = () => {
  const [{ user,basket }, dispatch] = useContext(DataContext);
  // const totalItem = basket?.reduce((amount, item) => {
  //   return item.amount + amount;
  // }, 0);
  // used amount + amount, 0 || 0, because if there is no item in the basket, it will return undefined
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;
return (
    <section className={classes.fixed}>
    <section className={classes.upper}>
        <section>
        <div className={classes.header_container}>
            {/* logo */}
            <div className={classes.logo_container}>
            <Link to="/">
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
                />
            </Link>

              {/* delivery */}
            <div className={classes.delivery}>
                <span>
                  {/* icon */}
                <GrLocation />
                </span>

                <div>
                <p>Delivered to</p>
                <span>USA</span>
                </div>
            </div>
            </div>
            <div className={classes.search}>
              {/* search bar */}
            <select name="categories" id="categories">
                <option value="">All</option>
            </select>
            <input type="text" placeholder="Search..." />
            <IoSearch size={38} />
            </div>
            {/* right side links */}
            <div className={classes.order_container}>
            <Link to="" className={classes.language}>
                {" "}
                {/* flag and language */}
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt="US Flag"
                />
                <select name="language" id="language">
                <option value="">EN</option>
                </select>
            </Link>

              {/* The three components: sign in, Account list & cart */}
            <Link to={!user && "/auth"}>
                
                <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
            
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
                </div>
            </Link>

              {/* orders */}
            <Link to="/orders">
                <p>Returns</p>
                <span> & Orders</span>
            </Link>

              {/* cart */}
            <Link to="/cart" className={classes.cart}>
                <BiCartAdd size={38} />
                <span>{ totalItem}</span>
            </Link>
            </div>
        </div>
        </section>
    </section>
    <LowerHeader />
    </section>
);
};

export default Header;
