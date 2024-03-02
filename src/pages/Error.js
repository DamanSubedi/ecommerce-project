import { Link } from "react-router-dom"
import { FaStoreAlt } from "react-icons/fa"



// importing css

import "../index.css"

export default function Error() {
    return (
        <section className="error">
            <div className="error_container">

                <h1> 404: page not found</h1>
                <Link to="/store"
                    className="btn_primary"
                >
                    <i><FaStoreAlt /></i><span>store</span>
                </Link>
            </div>
        </section>
    )
}