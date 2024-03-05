import { Link, useParams } from "react-router-dom"
import { FaCartPlus, FaLuggageCart, FaMoneyBillAlt } from 'react-icons/fa'
import Modal from "../component/cart/Modal"


import "../index.css"


import { StoreConsumer, withStoreConsumer } from "./context"
import { BsCartCheckFill } from "react-icons/bs"


export default function Product({ products, handleClick }) {
    return (


        <StoreConsumer>
            {value => {
                const { addToCart, openModal, selectedItem } = value
                return (
                    <>

                        {
                            products.map(item => {

                                const { category, images, id, price, title, description, inCart, defaultImg, openModal, index} = item
                                return (



                                    <div className="product" key={id}>


                                        <Link className="img_container"
                                            to={`/store/${id}`}
                                            
                                        >
                                            <img className="img_top" src={images[0]} alt={title} />
                                        </Link>

                                        <h3>{title}</h3>
                                        <h6>Rs. {price}</h6>
                                        <h6 >{category}</h6>
                                        <p>
                                            {description.substring(0, 50)}...
                                            <Link to={`/store/${id}`} className="btn_white"
                                                onClick={() => { selectedItem(id) }}>
                                                see More
                                            </Link>
                                        </p>

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

                        {/* {openModal && <Modal />} */}
                    </>



                )
            }}
        </StoreConsumer>
    )
}





