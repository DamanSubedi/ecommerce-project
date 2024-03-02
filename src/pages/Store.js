import { Component } from "react";
import { StoreConsumer, StoreContext } from "../component/context";
import { Link } from "react-router-dom";
import StoreList from "../component/StoreList";


// importing css
import '../index.css'




export default class Store extends Component {
    static contextType = StoreContext

    render() {
        const value = this.context

        if (!value) {
            return (
                <h1>Loading, please wait</h1>
            )
        }


        const { categories, handleClick, isActive } = value
        return (
            <>
                <div className="btn_container">
                    {categories.map((item, index) => {
                        return (
                            <button
                                className={`cat_btn ${isActive === item ? "active" : null}`}
                                value={item}
                                onClick={(e) => handleClick(e)}
                                key={index} >
                                {item}
                            </button>
                        )
                    })}
                </div>



                <StoreList />
            </>
        )
    }
}

