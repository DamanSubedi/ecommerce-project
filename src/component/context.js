import React, { Component, createContext } from "react";

import StoreData from '../data'

const StoreContext = createContext()

class StoreProvider extends Component {
    state = {
        products: [],
        filteredProducts: [],
        categories: [],
        category: "all",
        isActive: "all",
        detailProduct: [],
        openModal: false,
        cartItems: [],
        cartTotalAmt: { cartTotal: 0, cartTax: 0 }

    }

    componentDidMount() {
        let data = this.formatData()
        let allCategories = this.gettingUniqueCategories()






        this.setState({
            products: [...data],
            filteredProducts: [...data],
            categories: allCategories,
        })
    }

    componentWillUnmount() {
        localStorage.clear()
    }


    //getting from local storage
    getFromLocalStorage() {
        let cartItems = localStorage.getItem("cartItem")
        if (cartItems) {
            return JSON.parse(cartItems)
        } else {
            return []
        }

    }

    //simplifying array and incart property
    formatData = () => {
        let tempProducts = StoreData.map(item => {

            let category = item.category.name
            let defaultImg = item.category.image
            return { ...item, category, defaultImg, count: 0, total: 0, tax: 0, inCart: false, }
        })
        return tempProducts
    }


    //getting unique categories of items

    gettingUniqueCategories = () => {
        let categories = StoreData.map(item => item.category.name)
        return ["all", ...new Set(categories)]
    }
    // taking  category inputs
    handleClick = (e) => {
        let category = e.target.value

        this.setState({ category }, this.filterItems)

    }

    // filtering items based on categories
    filterItems = (e) => {
        let tempItems = [...this.state.products]
        let category = this.state.category

        if (category !== "all") {
            tempItems = tempItems.filter(products => products.category === category)
        }

        this.setState({
            filteredProducts: tempItems,
            isActive: category
        })
    }



    // setting up item for detailed page
    selectedItem = (id) => {
        let selectedItem = this.state.products.find(item => item.id === id)
        this.setState({
            detailProduct: [selectedItem]
        })
    }
    //adding to the cart

    addToCart = (id) => {
        let selectedItem = this.state.products.find(item => item.id === id)
        selectedItem.inCart = true
        selectedItem.total = selectedItem.price
        selectedItem.count = 1
        selectedItem.tax = (parseInt(selectedItem.price) * 0.1).toFixed(2)
        this.setState({
            openModal: true,
            cartItems: [...this.state.cartItems, selectedItem],
            detailProduct: [selectedItem]
        }, () => this.cartTotal())
    }

    // increase count function 
    increase = (id) => {
        let selectedItem = this.state.cartItems.find(item => item.id === id)
        selectedItem.count = selectedItem.count + 1
        selectedItem.total = selectedItem.price * selectedItem.count
        selectedItem.tax = (parseInt(selectedItem.total) * 0.1).toFixed(2)

        this.setState({
            cartItems: [...this.state.cartItems],
        }, () => this.cartTotal())


    }

    //decrease count function
    decrease = (id) => {
        let selectedItem = this.state.products.find(item => item.id === id)
        selectedItem.count = selectedItem.count - 1
        if (selectedItem.count < 1) {
            this.removeItem(id)
        } else {
            selectedItem.total = selectedItem.price * selectedItem.count
            selectedItem.tax = (parseInt(selectedItem.total) * 0.1).toFixed(2)
            this.setState({
                cartItems: [...this.state.cartItems]
            }, () => this.cartTotal())
        }

    }

    //removing item from cart list

    removeItem = (id) => {
        let selectedItem = this.state.cartItems.find((item) => item.id === id)
        selectedItem.inCart = false

        let cartItems = this.state.cartItems.filter(item => item.id !== id)
        this.setState({
            cartItems: cartItems,
        }, () => { console.log(this.state.cartItems) })

        console.log(cartItems);


    }

    // closing modal
    closeModal = () => {
        this.setState(
            {
                openModal: false
            }
        )
    }

    cartTotal = () => {
        let itemTotal = this.state.cartItems.map(item => item.total)
        // this.setState({
        //     cartTotal : {...this.state.cartTotal, tempItems}
        // }, () => console.log(this.state.cartTotal))
        let tax = this.state.cartItems.map(item => item.tax)

        let cartTotal = 0;
        itemTotal.forEach(i => {
            cartTotal += i
        })

        let cartTax = 0;
        tax.forEach(t => cartTax += parseInt(t))

        this.setState({
            cartTotalAmt: { cartTotal, cartTax }
        }, () => console.log(this.state.cartTotalAmt))
    }


    clearCart = () => {
        this.state.cartItems.map(item => item.inCart = false)
        this.setState({
            cartItems: [],
        })
    }





    render() {

        return (
            <StoreContext.Provider value={{
                ...this.state,
                handleClick: this.handleClick,
                addToCart: this.addToCart,
                closeModal: this.closeModal,
                selectedItem: this.selectedItem,
                increase: this.increase,
                decrease: this.decrease,
                removeItem: this.removeItem,
                cartTotal: this.cartTotal,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

const StoreConsumer = StoreContext.Consumer

export { StoreConsumer, StoreProvider, StoreContext }

