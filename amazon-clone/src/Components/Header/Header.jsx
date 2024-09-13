import React from 'react'
import classes from './Header.module.css';
import { GrLocation } from "react-icons/gr";
import { BiCartAdd } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import LowerHeader from './LowerHeader'

const Header = ()=> {
  return (
    <>
    <section className= {classes.upper}>
        <section>
            <div className={classes.header_container}>
                {/* logo */}
                <div className={classes.logo_container}>
                <a href="/"> {/*A single forward slash (/) refers to the root of the current website, typically the homepage. */}
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
    
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
            <div className = {classes.search}>
                {/* search bar */}
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text"/>  
                <IoSearch size ={26}/>
                {/* icon */}
            </div>
            {/* right side link */}
    
                <div className={classes.order_container}>
                <a href="" className = {classes.language}>     {/* flag and language */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="" />
                
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </a>
                
                    {/* THe three components sign in, Account list & cart */}
                    <a href="">
                        <div>
                            <>
                        <p>Hello,Sign In</p>
                        <span>Account & Lists</span>
                        </>
                        </div>
                    </a>
                    {/* orders */}
                    <a href="">
                        <p>Returns</p>
                        <span> & Orders</span>
                    </a>
                    {/* cart */}
                    <a href="" className = {classes.cart}>
                    {/* cart_icon */}
                    <BiCartAdd size={38}/>
                    <span>0</span>
                    </a>
            
                </div>
            </div>
        </section>
    </section>
    <LowerHeader/>
    </>
)
}

export default Header