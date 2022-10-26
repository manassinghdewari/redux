import cartItems from "../cartItems";
import { useSelector } from "react-redux";
import {CartIcon} from '../icons'
import React from 'react'

const Navbar = () => {
    // useSelector is a funtion that take current state as an arguments and returns whatever data you want from it

    // console.log(
    //     useSelector((store) => {
    //         console.log(store);
    //     })
    // );
    // here store is the entire state
    const amount = useSelector((store)=>store.cart);

  return (
    <>
    <nav>
        <div className="nav-center">
            <h3>redux toolkit</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className="total-amount">{amount.amount}</p>
                </div>
            </div>
        </div>
        
    </nav>
    </>
  )
}

export default Navbar