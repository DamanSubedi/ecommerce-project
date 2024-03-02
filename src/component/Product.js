import { Link } from "react-router-dom"
import { FaCartPlus, FaLuggageCart, FaMoneyBillAlt } from 'react-icons/fa'
import Modal from "../component/cart/Modal"


import "../index.css"


import { StoreConsumer } from "./context"
import { BsCartCheckFill } from "react-icons/bs"


export default function Product({ products }) {
    return (


        <StoreConsumer>
            {value => {
                const { addToCart, openModal, selectedItem } = value
                return (
                    <>
                        {
                            products.map(item => {

                                const { category, images, id, price, title, description, inCart, defaultImg, openModal } = item
                                return (



                                    <div className="product" key={id}>
                                        <Link to='/details'
                                        onClick={()=>selectedItem(id)}
                                        className="product_container">

                                            <div className="img_container">
                                                <img className="img_top" src={images[0]} alt={title} />
                                            </div>

                                            <h3>{title}</h3>
                                            <h6>Rs. {price}</h6>
                                            <h6 >{category}</h6>
                                            <p>
                                                {description.substring(0, 50)}...
                                                <Link to='/details' className="btn_white"
                                                    onClick={() => { selectedItem(id) }}>
                                                    see More
                                                </Link>
                                            </p>

                                        </Link>
                                        <button className="cart"
                                            onClick={() => addToCart(id)}
                                            disabled={inCart ? true : false}
                                        >
                                            {inCart ? <BsCartCheckFill style={{ color: "var(--color-light)" }} /> : <FaCartPlus />}
                                        </button>

                                    </div>
                                )



                            })
                        }

                       {openModal && <Modal />}
                    </>
                )
            }}
        </StoreConsumer >
    )
}

