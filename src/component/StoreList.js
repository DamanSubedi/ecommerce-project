import Product from "./Product"
import { StoreConsumer } from "./context"
import { FaFileArrowUp } from "react-icons/fa6"


import "../index.css"
import { Link } from "react-router-dom"

export default function StoreList() {
    return (

        <StoreConsumer>
            {value => {
                const { handleClick, filteredProducts, selectedItem, addToCart, scrollHeight, findScrollHeight, backToTop } = value

                document.addEventListener("scroll", findScrollHeight)

                console.log(scrollHeight)
                return (


                    <section className="store_list">
                        <div className="store_list_center">
                            <Product handleClick={handleClick} products={filteredProducts}
                                addToCart={addToCart} selectedItem={selectedItem} />
                        </div>

                        <button className={`cart_btn back_to_top ${scrollHeight > 1000 ? 'show_back_to_top' : null}`}
                            onClick={backToTop}
                        >

                            <FaFileArrowUp />

                        </button>

                    </section>
                )
            }}
        </StoreConsumer>

    )

}