import { Component } from "react";






export default class Hero extends Component {

    render() {
        return (
            <>
                <header className={this.props.hero}>
                    {this.props.children}
                </header>
            </>
        )
    }
}