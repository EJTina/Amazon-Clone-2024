import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import classes from './Header.module.css';

function LowerHeader() {
  return (
    <div className= {classes.lower_container}>

        <ul>
            <li>
            <IoMenuSharp />
                <p>All</p>
            </li>
            <li>Same-Day Delivery</li>
            <li>Medical Care</li> {/*.Drop menu.*/}
            <li>Baby Registry</li>
            <li>Costumer Service</li>
            <li>Groceries</li> {/*.Drop menu.*/}
            <li>Buy Again</li>
            <li>Household,Health & Baby Care</li>
        </ul>
    </div>
  )
}

export default LowerHeader