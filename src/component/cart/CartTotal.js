
import { useContext } from "react"
import "../../index.css"
import { StoreContext } from "../context"

export default function () {
    const context = useContext(StoreContext)
    const { cartTotalAmt, clearCart } = context
    const { cartTotal, cartTax, totalAmt } = cartTotalAmt
    // const {cartTotal, cartTax} = cartTotalAmt
    return (
        <section className="cart_total">

            <aside className="cart_total_container">
                <div className="cart_total_center">

                    <h6>price</h6>

                    <h6>: Rs {cartTotal}</h6>
                    <h6>tax</h6>
                    <h6>: Rs {cartTax}</h6>
                    <h6>Total Amount</h6>
                    <h6>: Rs {totalAmt}</h6>

                </div>
                <button className="btn_primary cart_btn"
                    onClick={clearCart}>
                    clear cart
                </button>
            </aside>
        </section>
    )
}