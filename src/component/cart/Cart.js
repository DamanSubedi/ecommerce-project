import { Component, useContext } from "react";
import { StoreConsumer, StoreContext } from "../context";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";
import { FaStoreAlt } from "react-icons/fa"


export default function Cart() {
    const cart = useContext(StoreContext)
    const { cartItems, increase, decrease, removeItem, cartTotal, clearCart } = cart
    if (cartItems.length < 1) {
        return (<>
            <section className="empty_cart">
                <div className="empty_cart_container">
                    <h1>
                        opps ! your cart is empty
                    </h1>
                    <Link to="/store" className="btn_primary">
                        <i><FaStoreAlt /></i><span>store</span>
                    </Link>
                </div>
            </section>
        </>
        )
    }

    // console.log(cartItems)
    return (
        <section className="cart">
            <h2>Your Cart</h2>

            <div className="cart_container">
                {cartItems.map(item => {
                    const { id, title, price, tax, total, count, images } = item
                    return (
                        <div className="cart_item" key={id}>
                            <div className="cart_item_center">
                                <div className="cart_item_info">
                                    <div className="img_container">
                                        <img src={images[0]} alt={title} />
                                    </div>
                                    <div className="item_info">
                                        <h3>{title}</h3>
                                        <h6>price: Rs {price}</h6>
                                        <h6>total : Rs {total}</h6>
                                        <h6>tax : {tax}</h6>
                                    </div>
                                </div>

                                <div className="count_fnc_center">
                                    <button className="count_btn"
                                        onClick={() => increase(id)}>
                                        +
                                    </button>
                                    <span onChange={cartTotal}>{count}</span>
                                    <button className="count_btn"
                                        onClick={() => decrease(id)}>
                                        -
                                    </button>
                                    <button onClick={() => removeItem(id)} className="btn_white cart">
                                        remove
                                    </button>
                                </div>
                            </div>


                        </div>
                    )
                })}

            </div>
            <button className="btn_primary cart_btn"
                onClick={clearCart}>
                clear cart
            </button>
            <CartTotal />
        </section >
    )
}