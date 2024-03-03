import { useContext } from "react"
import { StoreContext } from "../context"
import { FaTimes, FaLuggageCart, FaCartPlus, FaStoreAlt } from "react-icons/fa"
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom"



// importing css
import "../../index.css"



export default function Modal() {
    const modal = useContext(StoreContext)
    const { closeModal, detailProduct, addToCart } = modal;
    // console.log(modal);
    return (<>
        <section className="modal">


            <>
                {
                    detailProduct.map(item => {

                        const { category, images, id, price, title, description, inCart } = item
                        return (



                            <div className="modal_container" key={id}>
                                <button onClick={closeModal}
                                    className="modal_close_btn btn_white"
                                >
                                    <FaTimes />
                                </button>
                                <div className="img_container">
                                    <img className="img_top" src={images[0]} alt={title} />
                                </div>

                                <h3>{title}</h3>
                                <h6>Rs. {price}</h6>
                                <h6 >{category}</h6>
                                <p>
                                    {description.substring(0, 70)}...
                                    <Link to='/details' className="btn_white">
                                        see More
                                    </Link>
                                </p>
                                <div className="modal_btn_container">


                                    <button className="btn_primary cart_btn"
                                        onClick={() => addToCart(id)}
                                        disabled={inCart ? true : false}
                                    >
                                        {inCart ?
                                            (<>
                                                <i>
                                                    <BsFillCartCheckFill style={{ color: "var(--color-light)" }} />
                                                </i>
                                                <span>in Cart</span>
                                            </>
                                            ) :
                                            (<>
                                                <i>
                                                    <FaCartPlus />
                                                </i>
                                                <span>add to cart</span>
                                            </>
                                            )}
                                    </button>

                                    <button className="btn_primary"
                                        onClick={closeModal}
                                    >
                                        <i>
                                            <FaStoreAlt />
                                        </i>
                                        <span>store</span>
                                    </button>
                                    <button className="btn_primary cart_btn"
                                        onClick={
                                            closeModal
                                        }>
                                        <Link to={"/cart"}>
                                            <i>
                                                <FaLuggageCart />
                                            </i>
                                            <span>go to cart</span>
                                        </Link>
                                    </button>
                                </div>

                            </div>
                        )



                    })
                }
            </>
        </section>
    </>
    );
}