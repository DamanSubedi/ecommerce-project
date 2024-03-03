import Product from "./Product"
import { StoreConsumer } from "./context"


import "../index.css"

export default function StoreList() {
    return (

        <StoreConsumer>
            {value => {
                const { handleClick, filteredProducts, selectedItem, addToCart } = value
                return (


                    <section className="store_list">
                        <div className="store_list_center">
                            <Product handleClick={handleClick} products={filteredProducts}
                            addToCart={addToCart} selectedItem={selectedItem}/>
                        </div>
                    </section>
                )
            }}
        </StoreConsumer>
    )

}