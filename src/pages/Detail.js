import { Component } from "react";
import { StoreContext } from "../component/context";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaCartPlus, FaStoreAlt } from "react-icons/fa";

// importing css
import "../index.css"
import { Link } from "react-router-dom";


export default class Detail extends Component {
    static contextType = StoreContext
    render() {
        const { detailProduct, addToCart } = this.context
        return (
            <section className="detail">
                <div className="detail_container">

                    {
                        detailProduct.map(item => {

                            const { category, images, id, price, title, description, inCart, defaultImg, openModal } = item
                            return (




                                <div className="detail_center" key={id}>

                                    <div className="img_container">
                                        <img className="img_top" src={images[0]} alt={title} />
                                    </div>
                                    <div className="product_info">

                                        <h3>{title}</h3>
                                        <h6>Rs. {price}</h6>
                                        <h6 >{category}</h6>
                                        <p>{description}</p>

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

                                            >
                                                <Link to='/store'>
                                                    <i>
                                                        <FaStoreAlt />
                                                    </i>
                                                    <span>store</span>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>



                                </div>
                            )



                        })
                    }
                </div>



            </section>
        )
    }
}