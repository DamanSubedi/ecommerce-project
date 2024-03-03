import React, { Component } from "react";

import data from '../data'

//importing icons
import { FaHome, FaStoreAlt, FaLuggageCart } from "react-icons/fa"
import { Link } from "react-router-dom";







export default class NavBar extends Component {

    render() {

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