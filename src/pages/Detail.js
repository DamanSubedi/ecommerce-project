import { Component } from "react";
import { StoreContext } from "../component/context";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaCartPlus, FaStoreAlt, FaLuggageCart } from "react-icons/fa";

// importing css
import "../index.css"
import { Link, useParams } from "react-router-dom";
import withRouter from "../component/withRouter";
import Product from "../component/Product";


class Detail extends Component {

    static contextType = StoreContext
    state = {
        id: this.props.params.id
    }




    render() {

        const { getItem, addToCart, closeModal } = this.context
        let singleProduct = getItem(Number(this.state.id))


        if (!singleProduct) {
            return (
                <h1>Loading, please wait !!!</h1>
            )
        }



        const { category, images, id, price, title, description, inCart, defaultImg, openModal } = singleProduct
        return (
            <section className="detail">
                <div className="detail_container">
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
                                    onClick={() => {
                                        addToCart(id)
                                        closeModal()
                                    }}
                                    disabled={inCart ? true : false}
                                >
                                    {inCart ?
                                        (<>
                                            <i>
                                                <BsFillCartCheckFill style={{ color: "var(--color-light)" }} />
                                            </i>
                                            in Cart
                                        </>
                                        ) :
                                        (<>
                                            <i>
                                                <FaCartPlus />
                                            </i>
                                            add to cart
                                        </>
                                        )}
                                </button>
                                <button className="btn_primary"                                >
                                    <Link to='/store'>
                                        <i>
                                            <FaStoreAlt />
                                        </i>
                                        store
                                    </Link>
                                </button>
                                <button className="btn_primary cart_btn"
                                    onClick={
                                        closeModal
                                    }>
                                    <Link to={"/cart"}>
                                        <i>
                                            <FaLuggageCart />
                                        </i>
                                        go to cart
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default withRouter(Detail);

