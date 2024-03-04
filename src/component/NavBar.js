import React, { Component } from "react";

import data from '../data'

//importing icons
import { FaHome, FaStoreAlt, FaLuggageCart } from "react-icons/fa"
import { Link } from "react-router-dom";

import { StoreContext } from "./context";





export default class NavBar extends Component {
    static contextType = StoreContext
    render() {

        const {cartTotalAmt, cartItems} = this.context
        const {totalCount} = cartTotalAmt

        return (
            <>
                <nav className={`nav`}>
                    <div className="nav_container">

                        <div className="nav_center">
                            <div className="logo">
                                <h4>codeBy<span>Daman</span></h4>
                            </div>
                        </div>
                        <div className="link_container">
                            <Link to='/'>
                                <i> <FaHome /> </i><span>Home</span>                            </Link>
                            <Link to='/store'>
                                <i> <FaStoreAlt /> </i><span>store</span>
                            </Link>
                            <Link to='/cart'>
                                {cartItems.length >  0 ? (<div className="cart_item_count">{totalCount}</div> ) : null}
                                <i>
                                    <FaLuggageCart />
                                </i><span>cart</span>
                            </Link>
                        </div>
                    </div>


                </nav>



            </>
        )
    }
}