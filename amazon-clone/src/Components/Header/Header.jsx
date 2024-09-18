import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BiCartAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import LowerHeader from "./LowerHeader";

const Header = () => {
return (
    <>
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
            <IoSearch size={26} />
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
            <Link to="">
                <div>
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
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
                <span>0</span>
            </Link>
            </div>
        </div>
        </section>
    </section>
    <LowerHeader />
    </>
);
};

export default Header;
